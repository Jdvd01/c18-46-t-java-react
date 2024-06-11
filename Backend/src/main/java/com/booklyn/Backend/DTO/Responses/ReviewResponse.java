package com.booklyn.Backend.DTO.Responses;

import lombok.*;

import java.time.LocalDate;
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class ReviewResponse {
    private Long id;
    private String comment;
    private int rating;
    private LocalDate date;
    private String userName;
}
