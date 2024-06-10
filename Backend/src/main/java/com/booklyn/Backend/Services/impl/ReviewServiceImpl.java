package com.booklyn.Backend.Services.impl;

import com.booklyn.Backend.DTO.Requests.ReviewRequest;
import com.booklyn.Backend.Exceptions.ResourceNotFoundException;
import com.booklyn.Backend.Models.Book.Book;
import com.booklyn.Backend.Models.Reviews.Review;
import com.booklyn.Backend.Repository.Book.BookRepository;
import com.booklyn.Backend.Repository.Review.ReviewRepository;
import com.booklyn.Backend.Services.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ReviewServiceImpl implements ReviewService {
    @Autowired
    private ReviewRepository reviewRepository;
    @Autowired
    BookRepository bookRepository;

    @Override
    public Review cretateReview(Long bookId, ReviewRequest reviewRequest) {
        Optional<Book> bo = bookRepository.findById(bookId);
        if (bo.isEmpty()) throw new ResourceNotFoundException("Book with id " + bookId + " not found");
        Book book = bo.get();
        return reviewRepository.save(Review
                .builder()
                .comment(reviewRequest.getComment())
                .rating(reviewRequest.getRating())
                .book(book)
                .build()
        );
    }

    @Override
    public List<Review> findReviewsByBookId(Long bookId) {
        Optional<Book> bo = bookRepository.findById(bookId);
        if (bo.isEmpty()) throw new ResourceNotFoundException("Book with id " + bookId + " not found");
        Book book = bo.get();
        return reviewRepository.findByBook(book);
    }
}
