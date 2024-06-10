package com.booklyn.Backend.Services;

import com.booklyn.Backend.DTO.Requests.ReviewRequest;
import com.booklyn.Backend.Models.Reviews.Review;
import org.apache.coyote.BadRequestException;

import java.util.List;

public interface ReviewService {

    public Review cretateReview(Long bookId, Long userId, ReviewRequest reviewRequest);

    public List<Review> findReviewsByBookId(Long bookId);

    public List<Review> findReviewsByUser(Long userId);


    public Review removeReviewById(Long reviewId);

    public Review updateReviewById(Long reviewId, ReviewRequest reviewRequest);
}
