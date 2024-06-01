package com.booklyn.Backend.Models.Order;


import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "orderDetails")
public class OrderDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long detailsId;
    @ManyToOne
    @JoinColumn(name = "order_id")
    @JsonBackReference
    private Order order;
    private String bookTitle;
    private String bookAuthor;
    private String ISBN;
    private String lenguage;
    private Integer quantity;
    private Float price;

}
