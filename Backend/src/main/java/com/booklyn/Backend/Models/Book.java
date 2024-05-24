package com.booklyn.Backend.Models;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "id_book", nullable = false)
    private Long idBook;

}
