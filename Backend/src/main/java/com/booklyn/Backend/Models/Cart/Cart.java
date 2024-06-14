package com.booklyn.Backend.Models.Cart;

import com.booklyn.Backend.Models.User.User;
import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "carts")
public class Cart {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long cartId;
    @OneToOne(mappedBy = "cart")
    @JsonBackReference
    private User user;
    @OneToMany(mappedBy = "cart", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private Set<Product> product;
    private Float totalPrice;

    private LocalDateTime lastUpdate = LocalDateTime.now();

    public Float calculateTotalPrice(){
        this.totalPrice=0.0f;
        for(Product prd: product){
            Float totalProduct = prd.getPrice()*prd.getQuantity();
            this.totalPrice +=totalProduct;
        }
        return totalPrice;
    }
}
