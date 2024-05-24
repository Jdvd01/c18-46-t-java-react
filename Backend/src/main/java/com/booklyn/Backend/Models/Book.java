package com.booklyn.Backend.Models;

import jakarta.persistence.*;

@Entity
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "id_book", nullable = false)
    private Long idBook;

}
