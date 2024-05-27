package com.booklyn.Backend.Exceptions;

import com.booklyn.Backend.DTO.ErrorResponse;
import org.apache.coyote.BadRequestException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;

import java.time.LocalDateTime;

@RestControllerAdvice
public class GlobalExceptionHandler {


    /*==========================================   BAD REQUEST   ==========================================*/
    @ExceptionHandler(BadRequestException.class)
    public ResponseEntity<ErrorResponse> handlerBadRequestException(BadRequestException ex, WebRequest webRequest){
        ErrorResponse response = ErrorResponse
                .builder()
                .dateTime(LocalDateTime.now())
                .message(ex.getMessage())
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


    /*==========================================   AUTHENTICATION EXCEPTION  ==========================================*/
    @ExceptionHandler(AuthenticationException.class)
    public ResponseEntity<ErrorResponse> handlerAuthenticationException(AuthenticationException ex, WebRequest webRequest) {
        ErrorResponse errorResponse = ErrorResponse
                .builder()
                .dateTime(LocalDateTime.now())
                .message("Credenciales invalidas. Ingrese un correo electrónico y contraseña registrados.")
                .url(webRequest.getDescription(false).replace("uri=", ""))
                .build();
        return new ResponseEntity<>(errorResponse, HttpStatus.UNAUTHORIZED);
    }
}
