package com.booklyn.Backend.Repository.Cart;

import com.booklyn.Backend.Models.Cart.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    Optional<Product> findByBookIdAndCart_CartId(Long bookId, Long cartId);
}
