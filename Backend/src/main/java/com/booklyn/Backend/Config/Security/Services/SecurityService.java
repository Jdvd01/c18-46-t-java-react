package com.booklyn.Backend.Config.Security.Services;

import com.booklyn.Backend.Config.Security.jwt.JwtService;
import com.booklyn.Backend.Exceptions.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SecurityService {
    @Autowired
    private JwtService jwtService;


    public Long getCurrentUserId(String token) {
        if(token == null || token.isEmpty()) throw new ResourceNotFoundException("Invalid token");
        return jwtService.getIdFromToken(token);
    }
}