package com.booklyn.Backend.Config.Security.DTO;

import com.booklyn.Backend.Models.User.ERole;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AuthResponse {
    private String token;
    private String email;
    private ERole role;
}
