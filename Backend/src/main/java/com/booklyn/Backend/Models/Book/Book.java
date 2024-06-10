package com.booklyn.Backend.Models.Book;

import com.booklyn.Backend.Models.Reviews.Review;
import com.booklyn.Backend.Models.User.Inventory;
import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
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
    /*@ManyToOne
    @JoinColumn(name = "category_id")
    @JsonBackReference*/
    @Enumerated(EnumType.STRING)
    private ECategory category;
    @ManyToOne
    @JoinColumn(name = "inventory_id")
    @JsonBackReference
    private Inventory inventory;

    @OneToMany(mappedBy = "book", cascade = CascadeType.ALL)
    @JsonBackReference
    private List<Review> reviews = new ArrayList<>();
}
