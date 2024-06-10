package com.booklyn.Backend.DTO.Responses;

import com.booklyn.Backend.Models.Cart.Product;
import lombok.*;

import java.util.Set;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CartResponse {
    Set<Product> products;
    Float totalPrice;
}
