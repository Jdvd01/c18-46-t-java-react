package com.booklyn.Backend.Controllers;

import com.booklyn.Backend.DTO.Requests.ReviewRequest;
import com.booklyn.Backend.DTO.Responses.ErrorResponse;
import com.booklyn.Backend.DTO.Responses.ReviewResponse;
import com.booklyn.Backend.DTO.Responses.SuccessResponse;
import com.booklyn.Backend.Models.Book.Book;
import com.booklyn.Backend.Models.Reviews.Review;
import com.booklyn.Backend.Services.BookService;
import com.booklyn.Backend.Services.ReviewService;
import com.booklyn.Backend.Utils.Utils;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import org.apache.coyote.BadRequestException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
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
    @Autowired
    private Utils utils;
    // =====================================================================
    //                              POST
    // =====================================================================

    @PostMapping("/save")
    @PreAuthorize("hasAnyAuthority('ADMIN','CUSTOMER','SALESMAN')")
    public ResponseEntity<?> createReview(@RequestParam Long bookId,
                                          @Valid @RequestBody ReviewRequest reviewRequest,
                                          BindingResult bindingResult, HttpServletRequest httpRequest) {
        if (bindingResult.hasErrors()) {
            StringBuilder errorMessage = new StringBuilder();
            bindingResult.getAllErrors().forEach(error -> errorMessage.append(error.getDefaultMessage()).append("; "));
            return new ResponseEntity<>(errorMessage.toString(), HttpStatus.BAD_REQUEST);
        }

        String token = utils.getTokenFromRequest(httpRequest);
        Long userId = this.utils.getCurrentUserId(token);

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
    @PreAuthorize("hasAnyAuthority('ADMIN','CUSTOMER', 'SALESMAN')")
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
    public ResponseEntity<SuccessResponse> getReviewsByBook(
            @RequestParam Long bookId,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "9") int size) {
        Page<ReviewResponse> reviews = reviewService.findReviewsByBookId(bookId, page, size);
        return new ResponseEntity<>(SuccessResponse
                .builder()
                .statusCode("200")
                .message("Reviews were successfully retrieved")
                .url("/api/v1/reviews/reviewsByBook?bookId=" + bookId)
                .object(reviews.getContent())
                .build(), HttpStatus.OK);
    }

    @GetMapping("reviewsByUser")
    public ResponseEntity<SuccessResponse> getReviewsByUser(
            @RequestParam Long userId,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "9") int size) {
        Page<ReviewResponse> reviews = reviewService.findReviewsByUser(userId, page, size);
        return new ResponseEntity<>(SuccessResponse
                .builder()
                .object(reviews.getContent())
                .message("Reviews were successfully retrieved")
                .url("/api/v1/reviews/reviewsByUser?userId=" + userId)
                .statusCode("200")
                .build(), HttpStatus.OK);
    }

    // =====================================================================
    //                              DELETE
    // =====================================================================
    @DeleteMapping("deleteReview")
    @PreAuthorize("hasAnyAuthority('ADMIN','CUSTOMER','SALESMAN')")
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
