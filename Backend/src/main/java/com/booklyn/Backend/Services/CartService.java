package com.booklyn.Backend.Services;

import com.booklyn.Backend.DTO.Responses.CartResponse;
import org.apache.coyote.BadRequestException;

public interface CartService {
    CartResponse getUserCart(Long userId) throws BadRequestException;
    CartResponse addItemToCart(Long userId, Long bookId, Integer quantity) throws BadRequestException;
    CartResponse updateCartProduct(Long userId, Long productId, Integer quantity) throws BadRequestException;
    CartResponse removeProductFromCart(Long userId, Long productId) throws BadRequestException;
    void cleanCart(Long userId) throws BadRequestException;
    CartResponse checkout(Long userId);
}
