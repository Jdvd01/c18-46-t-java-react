package com.booklyn.Backend.Services;

import com.booklyn.Backend.Models.Order.Order;
import org.apache.coyote.BadRequestException;

import java.util.List;

public interface OrderService {
    Order createOrder(Long userId) throws BadRequestException;

    List<Order> findAll(Long userId) throws BadRequestException;

    List<Order> findAll();
}
