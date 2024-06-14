package com.booklyn.Backend.Exceptions;

import com.booklyn.Backend.DTO.Responses.ErrorResponse;
import io.jsonwebtoken.ExpiredJwtException;
import org.apache.coyote.BadRequestException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;

import java.time.LocalDateTime;

@RestControllerAdvice
public class GlobalExceptionHandler {

    /*==========================================   BAD REQUEST   ==========================================*/
    @ExceptionHandler({BadRequestException.class, MethodArgumentNotValidException.class})
    public ResponseEntity<ErrorResponse> handleBadRequestException(Exception ex, WebRequest webRequest){
        String message;
        if (ex instanceof BadRequestException) {
            message = ex.getMessage();
        } else if (ex instanceof MethodArgumentNotValidException) {
            MethodArgumentNotValidException validationException = (MethodArgumentNotValidException) ex;
            message = validationException.getBindingResult().getFieldError().getDefaultMessage();
        } else {
            message = "Bad request";
        }

        ErrorResponse response = ErrorResponse
                .builder()
                .dateTime(LocalDateTime.now())
                .message(message)
                .url(webRequest.getDescription(false).replace("uri=", ""))
                .build();
        return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
    }


    /*==========================================   RESOURCE ALREADY EXIST   ==========================================*/
    @ExceptionHandler(ResourceAlreadyExistException.class)
    public ResponseEntity<ErrorResponse> handlerResourceAlreadyExistException(ResourceAlreadyExistException ex, WebRequest webRequest){
        ErrorResponse response = ErrorResponse
                .builder()
                .dateTime(LocalDateTime.now())
                .message(ex.getMessage())
                .url(webRequest.getDescription(false).replace("uri=", ""))
                .build();
        return new ResponseEntity<>(response, HttpStatus.CONFLICT);
    }
    /*==========================================   RESOURCE NOT FOUND   ==========================================*/
    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<ErrorResponse> handlerResourceNotFoundException(ResourceNotFoundException ex, WebRequest webRequest){
        ErrorResponse errorResponse = ErrorResponse
                .builder()
                .dateTime(LocalDateTime.now())
                .message(ex.getMessage())
                .url(webRequest.getDescription(false).replace("uri=", ""))
                .build();

        return new ResponseEntity<>(errorResponse, HttpStatus.NOT_FOUND);
    }


    /*==========================================   EXPIRED JWT  ==========================================*/
    @ExceptionHandler(ExpiredJwtException.class)
    public ResponseEntity<ErrorResponse> handlerExpiredJwtException(ExpiredJwtException ex, WebRequest webRequest){
        ErrorResponse errorResponse = ErrorResponse
                .builder()
                .dateTime(LocalDateTime.now())
                .message(ex.getMessage())
                .url(webRequest.getDescription(false).replace("uri=", ""))
                .build();

        return new ResponseEntity<>(errorResponse, HttpStatus.UNAUTHORIZED);
    }


    /*==========================================   AUTHENTICATION EXCEPTION  ==========================================*/
    @ExceptionHandler(AuthenticationException.class)
    public ResponseEntity<ErrorResponse> handlerAuthenticationException(AuthenticationException ex, WebRequest webRequest) {
        ErrorResponse errorResponse = ErrorResponse
                .builder()
                .dateTime(LocalDateTime.now())
                .message("Invalid credentials.")
                .url(webRequest.getDescription(false).replace("uri=", ""))
                .build();
        return new ResponseEntity<>(errorResponse, HttpStatus.UNAUTHORIZED);
    }
}
