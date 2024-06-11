package com.booklyn.Backend.Services;

import com.booklyn.Backend.DTO.Requests.ReviewRequest;
import com.booklyn.Backend.Models.Reviews.Review;
import org.apache.coyote.BadRequestException;
import org.springframework.data.domain.Page;

import java.util.List;

public interface ReviewService {

    public Review cretateReview(Long bookId, Long userId, ReviewRequest reviewRequest);

    Page<Review> findReviewsByBookId(Long bookId, int page, int size);
    Page<Review> findReviewsByUser(Long userId, int page, int size);


    public Review removeReviewById(Long reviewId);

    public Review updateReviewById(Long reviewId, ReviewRequest reviewRequest);
}
