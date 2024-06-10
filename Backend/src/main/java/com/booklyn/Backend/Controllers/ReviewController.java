package com.booklyn.Backend.Controllers;

import com.booklyn.Backend.DTO.Requests.ReviewRequest;
import com.booklyn.Backend.DTO.Responses.ErrorResponse;
import com.booklyn.Backend.DTO.Responses.SuccessResponse;
import com.booklyn.Backend.Models.Book.Book;
import com.booklyn.Backend.Models.Reviews.Review;
import com.booklyn.Backend.Services.BookService;
import com.booklyn.Backend.Services.ReviewService;
import jakarta.validation.Valid;
import org.apache.coyote.BadRequestException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api/v1/reviews")
public class ReviewController {
    @Autowired
    ReviewService reviewService;

    @Autowired
    BookService bookService;
    // =====================================================================
    //                              POST
    // =====================================================================

    @PostMapping("/save")
    public ResponseEntity<?> createReview(@RequestParam Long bookId,
                                          @RequestParam Long userId,
                                          @Valid @RequestBody ReviewRequest reviewRequest,
                                          BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            StringBuilder errorMessage = new StringBuilder();
            bindingResult.getAllErrors().forEach(error -> errorMessage.append(error.getDefaultMessage()).append("; "));
            return new ResponseEntity<>(errorMessage.toString(), HttpStatus.BAD_REQUEST);
        }


        Review review = reviewService.cretateReview(bookId, userId, reviewRequest);
        return new ResponseEntity<>(SuccessResponse
                .builder()
                .statusCode("201")
                .message("Review was successfully saved")
                .url("/api/v1/reviews/save")
                .object(review)
                .build(), HttpStatus.CREATED);
    }


    // =====================================================================
    //                              PUT
    // =====================================================================
    @PutMapping("updateReview")
    public ResponseEntity<?> updateReview(@Valid @RequestBody ReviewRequest reviewRequest,
                                          @RequestParam Long reviewId,
                                          BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            StringBuilder errorMessage = new StringBuilder();
            bindingResult.getAllErrors().forEach(error -> errorMessage.append(error.getDefaultMessage()).append("; "));
            return new ResponseEntity<>(errorMessage.toString(), HttpStatus.BAD_REQUEST);
        }
        Review review = reviewService.updateReviewById(reviewId, reviewRequest);
        return new ResponseEntity<>(SuccessResponse
                .builder()
                .statusCode("200")
                .message("Review updated successfully")
                .object(review)
                .build(), HttpStatus.OK);
    }

    // =====================================================================
    //                              GET
    // =====================================================================

    @GetMapping("reviewsByBook")
    public ResponseEntity<SuccessResponse> getReviewsByBook(@RequestParam Long bookId) {
        List<Review> reviews = reviewService.findReviewsByBookId(bookId);
        return new ResponseEntity<>(SuccessResponse
                .builder()
                .statusCode("200")
                .message("Reviews were successfully retrieved")
                .url("/api/v1/reviews/")
                .object(reviews)
                .build(), HttpStatus.OK);
    }

    @GetMapping("reviewsByUser")
    public ResponseEntity<SuccessResponse> getReviewsByUser(@RequestParam Long userId) throws BadRequestException {
        List<Review> reviews = reviewService.findReviewsByUser(userId);
        return new ResponseEntity<>(SuccessResponse
                .builder()
                .object(reviews)
                .message("Reviws  were successfully retrieved")
                .url("/api/v1/reviews/reviewsByUser/" + userId)
                .statusCode("200")
                .build(), HttpStatus.OK);
    }

    // =====================================================================
    //                              DELETE
    // =====================================================================
    @DeleteMapping("deleteReview")
    public ResponseEntity<SuccessResponse> deleteReview(@RequestParam Long reviewId) {
        Review review = reviewService.removeReviewById(reviewId);
        return new ResponseEntity<>(SuccessResponse
                .builder()
                .statusCode("200")
                .message("Review was successfully removed")
                .object(review)
                .url("/api/v1/reviews/deleteReview/" + reviewId)
                .build(), HttpStatus.ACCEPTED);
    }

}
