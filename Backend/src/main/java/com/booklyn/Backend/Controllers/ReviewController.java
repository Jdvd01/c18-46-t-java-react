package com.booklyn.Backend.Controllers;

import com.booklyn.Backend.DTO.Requests.ReviewRequest;
import com.booklyn.Backend.DTO.Responses.SuccessResponse;
import com.booklyn.Backend.Models.Book.Book;
import com.booklyn.Backend.Models.Reviews.Review;
import com.booklyn.Backend.Services.BookService;
import com.booklyn.Backend.Services.ReviewService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

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
                                          @Valid @RequestBody ReviewRequest reviewRequest,
                                          BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            StringBuilder errorMessage = new StringBuilder();
            bindingResult.getAllErrors().forEach(error -> errorMessage.append(error.getDefaultMessage()).append("; "));
            return new ResponseEntity<>(errorMessage.toString(), HttpStatus.BAD_REQUEST);
        }

        Review review = reviewService.cretateReview(bookId, reviewRequest);
        return new ResponseEntity<>(SuccessResponse
                .builder()
                .statusCode("201")
                .message("Review was successfully saved")
                .url("/api/v1/reviews/save")
                .object(review)
                .build(), HttpStatus.CREATED);
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
}
