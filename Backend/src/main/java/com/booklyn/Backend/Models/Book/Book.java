package com.booklyn.Backend.Models.Book;

import com.booklyn.Backend.Models.User.Inventory;
import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "books")
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long bookid;
    private String ISBN;
    private String title;
    private String author;
    private Float price;
    private Integer stock;
    private String synopsis;
    private Integer pages;
    private String language;
    @ManyToOne
    @JoinColumn(name = "category_id")
    @JsonBackReference
    private Category category;
    @ManyToOne
    @JoinColumn(name = "inventory_id")
    @JsonBackReference
    private Inventory inventory;
    // private Set<Review> review;
}
