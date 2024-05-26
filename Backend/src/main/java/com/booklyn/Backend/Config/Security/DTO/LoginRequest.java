package com.booklyn.Backend.Config.Security.DTO;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class LoginRequest {
    @NotBlank(message = "Ingrese un email válido")
    private String email;
    @NotBlank(message = "Ingrese una contraseña.")
    private String password;
}
