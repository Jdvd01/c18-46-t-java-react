package com.booklyn.Backend.DTO;

import lombok.*;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class BookDTO {
    private Long bookid;
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
