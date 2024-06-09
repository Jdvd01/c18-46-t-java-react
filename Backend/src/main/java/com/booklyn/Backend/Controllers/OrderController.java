package com.booklyn.Backend.Controllers;

import com.booklyn.Backend.DTO.Responses.SuccessResponse;
import com.booklyn.Backend.Models.Order.Order;
import com.booklyn.Backend.Services.OrderService;
import com.booklyn.Backend.Utils.Utils;
import jakarta.servlet.http.HttpServletRequest;
import org.apache.coyote.BadRequestException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/orders")

public class OrderController {

    private String url = "/api/v1/orders";
    @Autowired
    private OrderService orderService;
    @Autowired
    private Utils utils;

    // =====================================================================
    //                              GET
    // =====================================================================
    @PreAuthorize("hasAnyAuthority('ADMIN')")
    @GetMapping("/findAll")
    public ResponseEntity<SuccessResponse> findAll(HttpServletRequest httpRequest) throws BadRequestException{

        List<Order> orderResponse = this.orderService.findAll();

        return new ResponseEntity<>(SuccessResponse
                .builder()
                .statusCode("200")
                .message("Successful request.")
                .object(orderResponse)
                .url(url+"/checkout")
                .build(), HttpStatus.OK);
    }

    @PreAuthorize("hasAnyAuthority('ADMIN','CUSTOMER','SALESMAN')")
    @GetMapping("/findAllByUser")
    public ResponseEntity<SuccessResponse> findAllByUserId(HttpServletRequest httpRequest) throws BadRequestException{
        String token = utils.getTokenFromRequest(httpRequest);
        Long userId = this.utils.getCurrentUserId(token);
        List<Order> orderResponse = this.orderService.findAll(userId);

        return new ResponseEntity<>(SuccessResponse
                .builder()
                .statusCode("200")
                .message("Successful request.")
                .object(orderResponse)
                .url(url+"/checkout")
                .build(), HttpStatus.OK);
    }

    // =====================================================================
    //                              POST
    // =====================================================================
    @PreAuthorize("hasAnyAuthority('ADMIN','CUSTOMER','SALESMAN')")
    @PostMapping("/checkout")
    public ResponseEntity<SuccessResponse> checkout(HttpServletRequest httpRequest) throws BadRequestException {
        String token = utils.getTokenFromRequest(httpRequest);
        Long userId = this.utils.getCurrentUserId(token);
        Order orderResponse = this.orderService.createOrder(userId);

        return new ResponseEntity<>(SuccessResponse
                .builder()
                .statusCode("201")
                .message("Successful request.")
                .object(orderResponse)
                .url(url+"/checkout")
                .build(), HttpStatus.CREATED);
    }

    // =====================================================================
    //                              PUT
    // =====================================================================


    // =====================================================================
    //                              PATCH
    // =====================================================================


    // =====================================================================
    //                              DELETE
    // =====================================================================
}
