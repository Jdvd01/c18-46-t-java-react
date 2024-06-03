package com.booklyn.Backend.DTO.Requests;

import lombok.*;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class BookRequest {
    private String ISBN;
    private String title;
    private String author;
    private Float price;
    private Integer stock;
    private String synopsis;
    private Integer pages;
    private String language;
    private String category;
}
