package com.booklyn.Backend.DTO.Requests;


import jakarta.validation.constraints.*;
import lombok.*;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class BookRequest {
    @NotBlank(message = "ISBN is mandatory")
    private String ISBN;

    @NotBlank(message = "Title is mandatory")
    @Size(max = 100, message = "Title must be less than 100 characters")
    private String title;

    @NotBlank(message = "Author is mandatory")
    @Size(max = 50, message = "Author must be less than 50 characters")
    private String author;

    @NotNull(message = "Price is mandatory")
    @DecimalMin(value = "0.0", inclusive = false, message = "Price must be greater than zero")
    private Float price;

    @NotNull(message = "Stock is mandatory")
    @Min(value = 0, message = "Stock must be zero or greater")
    private Integer stock;

    @Size(max = 1000, message = "Synopsis must be less than 1000 characters")
    private String synopsis;

    @NotNull(message = "Pages is mandatory")
    @Min(value = 1, message = "Pages must be at least 1")
    private Integer pages;

    @NotBlank(message = "Language is mandatory")
    @Size(max = 30, message = "Language must be less than 30 characters")
    private String language;

    @NotBlank(message = "Category is mandatory")
    @Size(max = 50, message = "Category must be less than 50 characters")
    private String category;
}
