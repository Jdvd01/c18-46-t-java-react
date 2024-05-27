package com.booklyn.Backend.Config.Security.Controllers;

import com.booklyn.Backend.Config.Security.DTO.AuthResponse;
import com.booklyn.Backend.Config.Security.DTO.LoginRequest;
import com.booklyn.Backend.Config.Security.DTO.RegisterRequest;
import com.booklyn.Backend.Config.Security.Services.AuthService;
import jakarta.validation.Valid;
import org.apache.coyote.BadRequestException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Objects;
import java.util.Optional;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    // =====================================================================
    //                              LOGIN
    // =====================================================================

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@Valid @RequestBody LoginRequest request, BindingResult bindingResult) throws BadRequestException {
        if(bindingResult.hasErrors()){
            throw new BadRequestException(bindingResult.getFieldError().getDefaultMessage());
        }

        Optional<AuthResponse> response = authService.login(request);
        if(response.isEmpty()) return ResponseEntity.badRequest().build();
        return ResponseEntity.ok(response.get());
    }


    // =====================================================================
    //                              REGISTER
    // =====================================================================

    @PostMapping("/register")
    public ResponseEntity<AuthResponse> register(@Valid @RequestBody RegisterRequest request, BindingResult bindingResult) throws BadRequestException {

        if(bindingResult.hasErrors()){
            throw new BadRequestException(Objects.requireNonNull(bindingResult.getFieldError()).getDefaultMessage());
        }

        Optional<AuthResponse> response = authService.register(request);
        if(response.isEmpty()) return ResponseEntity.badRequest().build(); // MEJORAR

        return ResponseEntity.ok(response.get());
    }
}
