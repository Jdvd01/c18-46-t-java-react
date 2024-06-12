package com.booklyn.Backend.Models.Reviews;

import com.booklyn.Backend.Models.Book.Book;
import com.booklyn.Backend.Models.User.User;
import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "Reviews")
public class Review {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "id", nullable = false)
    private Long id;

    private String comment;
    private int rating;
    private LocalDate date;

    @ManyToOne
    @JoinColumn(name = "book_id")
    @JsonBackReference
    private Book book;

    @ManyToOne
    @JoinColumn(name = "user_id")
    @JsonBackReference
    private User user;

}
