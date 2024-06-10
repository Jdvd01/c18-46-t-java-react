package com.booklyn.Backend.Services;

import com.booklyn.Backend.DTO.Requests.ReviewRequest;
import com.booklyn.Backend.Models.Reviews.Review;

import java.util.List;

public interface ReviewService {

    public Review cretateReview(Long bookId, ReviewRequest reviewRequest);

    public List<Review> findReviewsByBookId(Long bookId);
}
