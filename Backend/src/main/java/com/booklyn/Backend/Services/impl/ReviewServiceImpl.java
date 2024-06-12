package com.booklyn.Backend.Services.impl;

import com.booklyn.Backend.DTO.Requests.ReviewRequest;
import com.booklyn.Backend.DTO.Responses.ReviewResponse;
import com.booklyn.Backend.Exceptions.ResourceNotFoundException;
import com.booklyn.Backend.Models.Book.Book;
import com.booklyn.Backend.Models.Reviews.Review;
import com.booklyn.Backend.Models.User.User;
import com.booklyn.Backend.Repository.Book.BookRepository;
import com.booklyn.Backend.Repository.Review.ReviewRepository;
import com.booklyn.Backend.Repository.User.UserRepository;
import com.booklyn.Backend.Services.ReviewService;
import org.apache.coyote.BadRequestException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.rmi.NotBoundException;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class ReviewServiceImpl implements ReviewService {
    @Autowired
    private ReviewRepository reviewRepository;
    @Autowired
    BookRepository bookRepository;
    @Autowired
    UserRepository userRepository;

    @Override
    public Review cretateReview(Long bookId, Long userId, ReviewRequest reviewRequest) {
        Optional<Book> bo = bookRepository.findById(bookId);
        Optional<User> us = userRepository.findById(userId);
        if (bo.isEmpty() || us.isEmpty()) throw new ResourceNotFoundException("No found user or Book");
        Book book = bo.get();
        User user = us.get();
        return reviewRepository.save(Review
                .builder()
                .comment(reviewRequest.getComment())
                .rating(reviewRequest.getRating())
                .date(LocalDate.now())
                .user(user)
                .book(book)
                .build()
        );
    }

    @Override
    public Review updateReviewById(Long reviewId, ReviewRequest reviewRequest) {
        Review review = reviewRepository.findById(reviewId)
                .orElseThrow(() -> new ResourceNotFoundException("Review with id " + reviewId + "does not exist"));
        review.setRating(reviewRequest.getRating());
        review.setComment(reviewRequest.getComment());
        return reviewRepository.save(review);
    }

    @Override
    public Page<ReviewResponse> findReviewsByBookId(Long bookId, int page, int size) {
        Optional<Book> bo = bookRepository.findById(bookId);
        if (bo.isEmpty()) throw new ResourceNotFoundException("Book with id " + bookId + " not found");
        Book book = bo.get();
        Pageable pageable = PageRequest.of(page, size);
        Page<Review> reviews = reviewRepository.findByBook(book, pageable);
        return reviews.map(this::convertToDTO);
    }

    @Override
    public Page<ReviewResponse> findReviewsByUser(Long userId, int page, int size) {
        Optional<User> us = userRepository.findById(userId);
        if (us.isEmpty()) throw new ResourceNotFoundException("User with id " + userId + " not found");
        User user = us.get();
        Pageable pageable = PageRequest.of(page, size);
        Page<Review> reviews = reviewRepository.findByUser(user, pageable);
        return reviews.map(this::convertToDTO);
    }

    @Override
    public Review removeReviewById(Long reviewId) {
        Review review = reviewRepository.findById(reviewId)
                .orElseThrow(() -> new ResourceNotFoundException("Review with id " + reviewId + "does not exist"));
        reviewRepository.delete(review);
        return review;
    }

    private ReviewResponse convertToDTO(Review review) {
        String userName = "Unknown";

        if (review.getUser() != null && review.getUser().getUserInfo() != null) {
            userName = review.getUser().getUserInfo().getFirsName() + " " + review.getUser().getUserInfo().getLastName();
        }

        return ReviewResponse.builder()
                .id(review.getId())
                .comment(review.getComment())
                .rating(review.getRating())
                .date(review.getDate())
                .userName(userName)
                .build();
    }


}
