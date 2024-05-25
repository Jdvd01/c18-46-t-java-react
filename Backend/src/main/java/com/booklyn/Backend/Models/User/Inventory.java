package com.booklyn.Backend.Models.User;

import com.booklyn.Backend.Models.Book.Book;
import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.Builder;
import lombok.Data;

import java.util.Set;

@Data
@Builder
@Entity
@Table(name = "inventories")
public class Inventory {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long inventoryid;
    @OneToOne(mappedBy = "inventory")
    @JsonBackReference
    private User user;
    @OneToMany(mappedBy = "inventory", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private Set<Book> book;
}
