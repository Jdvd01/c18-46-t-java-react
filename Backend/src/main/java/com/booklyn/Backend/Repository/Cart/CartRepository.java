package com.booklyn.Backend.Repository.Cart;

import com.booklyn.Backend.Models.Cart.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CartRepository extends JpaRepository<Cart, Long> {
}
