package com.booklyn.Backend.Services.impl;

import com.booklyn.Backend.Exceptions.ResourceNotFoundException;
import com.booklyn.Backend.Models.Cart.Cart;
import com.booklyn.Backend.Models.Cart.Product;
import com.booklyn.Backend.Models.Order.Order;
import com.booklyn.Backend.Models.Order.OrderDetails;
import com.booklyn.Backend.Models.User.User;
import com.booklyn.Backend.Repository.Cart.CartRepository;
import com.booklyn.Backend.Repository.Cart.ProductRepository;
import com.booklyn.Backend.Repository.Order.OrderDetailsRepository;
import com.booklyn.Backend.Repository.Order.OrderRepository;
import com.booklyn.Backend.Repository.User.UserRepository;
import com.booklyn.Backend.Services.OrderService;
import org.apache.coyote.BadRequestException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;

@Service
public class OrderServiceImpl implements OrderService {
    @Autowired
    private OrderRepository orderRepository;
    @Autowired
    private OrderDetailsRepository orderDetailsRepository;
    @Autowired
    private CartRepository cartRepository;
    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private UserRepository userRepository;

    @Transactional
    public Order createOrder(Long userId) throws BadRequestException {
        Cart cart = getCartByUserId(userId);
        if(cart.getProduct().isEmpty()) throw new BadRequestException("Cart is empty.");
        Optional<User> user = userRepository.findById(userId);
        if(user.isEmpty()) throw new ResourceNotFoundException("Client doesn't exists.");


        Order order = this.orderRepository.save(Order
                .builder()
                        .date(LocalDateTime.now())
                        .status(true)
                        .totalPrice(cart.calculateTotalPrice())
                        .shippingAddress(user.get().getUserInfo().getAddress().getFullAddress())
                        .orderDetails(new HashSet<>())
                        .user(user.get())
                .build());
        this.userRepository.save(user.get());

        Iterator<Product> iterator = cart.getProduct().iterator();
        while (iterator.hasNext()) {
            Product product = iterator.next();
            OrderDetails orderDetails = this.orderDetailsRepository.save(OrderDetails
                    .builder()
                            .order(order)
                            .price(product.getPrice())
                            .ISBN(product.getISBN())
                            .bookAuthor(product.getBookAuthor())
                            .bookTitle(product.getBookTitle())
                            .language(product.getLanguage())
                            .quantity(product.getQuantity())
                            .bookId(product.getBookId())
                    .build());
            order.getOrderDetails().add(orderDetails);

            this.productRepository.delete(product); // Eliminar el producto de la base de datos
            iterator.remove(); // Eliminar el producto del carrito
        }
        cartRepository.save(cart); // Guardar el carrito actualizado

        return this.orderRepository.save(order);
    }

    @Override
    public List<Order> findAll(Long userId) throws BadRequestException {
        if(userId>1 || userId==null) throw new BadRequestException("User id cannot be less than 1 or null");
        List<Order> orders = this.orderRepository.findAllByUserId(userId);
        if(orders.isEmpty()) throw new ResourceNotFoundException("User doesn't have any orders.");
        return orders;
    }

    @Override
    public List<Order> findAll() {
        return this.orderRepository.findAll();
    }


    private Cart getCartByUserId(Long userId) throws BadRequestException {
        if(userId>1 || userId==null) throw new BadRequestException("User id cannot be less than 1 or null");
        return this.cartRepository.findByUserId(userId);
    }
}
