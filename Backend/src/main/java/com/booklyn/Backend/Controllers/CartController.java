package com.booklyn.Backend.Controllers;

import com.booklyn.Backend.DTO.Responses.CartResponse;
import com.booklyn.Backend.DTO.Responses.SuccessResponse;
import com.booklyn.Backend.Services.CartService;
import com.booklyn.Backend.Utils.Utils;
import jakarta.servlet.http.HttpServletRequest;
import org.apache.coyote.BadRequestException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/carts")
@PreAuthorize("hasAnyAuthority('ADMIN','CUSTOMER','SALESMAN')")
public class CartController {

    private String url = "/api/v1/carts";
    @Autowired
    private Utils utils;
    @Autowired
    private CartService cartService;

    // =====================================================================
    //                              GET
    // =====================================================================

    @GetMapping
    public ResponseEntity<SuccessResponse> getUserCart(HttpServletRequest httpRequest) throws BadRequestException {
        String token = utils.getTokenFromRequest(httpRequest);
        Long userId = this.utils.getCurrentUserId(token);
        CartResponse  cartResponse = this.cartService.getUserCart(userId);

        return new ResponseEntity<>(SuccessResponse
                .builder()
                .statusCode("200")
                .message("Successful request.")
                .object(cartResponse)
                .url(url)
                .build(), HttpStatus.OK);
    }

    // =====================================================================
    //                              POST
    // =====================================================================
    @PostMapping("/addItem/")
    public ResponseEntity<SuccessResponse> addItemToCart(@RequestParam Long bookId, @RequestParam Integer quantity, HttpServletRequest httpRequest) throws BadRequestException {
        String token = utils.getTokenFromRequest(httpRequest);
        Long userId = this.utils.getCurrentUserId(token);

        CartResponse  cartResponse = this.cartService.addItemToCart(userId, bookId, quantity);

        return new ResponseEntity<>(SuccessResponse
                .builder()
                .statusCode("200")
                .message("Successful request.")
                .object(cartResponse)
                .url(url)
                .build(), HttpStatus.CREATED);
    }

    // =====================================================================
    //                              PUT
    // =====================================================================


    // =====================================================================
    //                              PATCH
    // =====================================================================
    @PatchMapping("/updateQuantity")
    public ResponseEntity<SuccessResponse> updateQuantityItem(@RequestParam Long productId,@RequestParam Integer quantity, HttpServletRequest httpRequest) throws BadRequestException{
        String token = utils.getTokenFromRequest(httpRequest);
        Long userId = this.utils.getCurrentUserId(token);

        CartResponse  cartResponse = this.cartService.updateCartProduct(userId, productId, quantity);

        return new ResponseEntity<>(SuccessResponse
                .builder()
                .statusCode("200")
                .message("Product updated")
                .object(cartResponse)
                .url(url)
                .build(), HttpStatus.OK);
    }
    // =====================================================================
    //                              DELETE
    // =====================================================================

    @DeleteMapping("/removeItem")
    public ResponseEntity<SuccessResponse> removeItem(@RequestParam Long productId, HttpServletRequest httpRequest) throws BadRequestException {
        String token = utils.getTokenFromRequest(httpRequest);
        Long userId = this.utils.getCurrentUserId(token);

        CartResponse  cartResponse = this.cartService.removeProductFromCart(userId, productId);

        return new ResponseEntity<>(SuccessResponse
                .builder()
                .statusCode("200")
                .message("Product removed")
                .object(cartResponse)
                .url(url)
                .build(), HttpStatus.OK);
    }
    @DeleteMapping("/removeAll")
    public ResponseEntity<SuccessResponse> removeAll(HttpServletRequest httpRequest)throws BadRequestException {
        String token = utils.getTokenFromRequest(httpRequest);
        Long userId = this.utils.getCurrentUserId(token);
        this.cartService.cleanCart(userId);

        return new ResponseEntity<>(SuccessResponse
                .builder()
                .statusCode("200")
                .message("Product removed")
                .url(url)
                .build(), HttpStatus.NO_CONTENT);
    }
}
