package com.booklyn.Backend.Repository.Cart;

import com.booklyn.Backend.Models.Cart.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
}
