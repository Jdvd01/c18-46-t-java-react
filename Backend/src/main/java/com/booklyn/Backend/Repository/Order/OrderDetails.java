package com.booklyn.Backend.Repository.Order;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderDetails extends JpaRepository<OrderDetails, Long> {
}
