package com.booklyn.Backend.Config.Security.DTO;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {
    @Email(message = "Please enter a valid email address.")
    @NotBlank(message = "Email is required.")
    private String email;

    @NotBlank(message = "Password is required.")
    @Size(min = 8, max = 20, message = "The password must be between 8 and 20 characters.")
    private String password;

    @NotBlank(message = "Please enter your name")
    private String firsName;

    @NotBlank(message = "Please enter your last name")
    private String lastName;
}
