package com.booklyn.Backend.Utils;

import com.booklyn.Backend.Config.Security.jwt.JwtService;
import com.booklyn.Backend.Exceptions.ResourceNotFoundException;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;

@Component
public class Utils {

    @Autowired
    private JwtService jwtService;

    public String getTokenFromRequest(HttpServletRequest request) {
        final String authHeader = request.getHeader(HttpHeaders.AUTHORIZATION);
        if(StringUtils.hasText(authHeader) && authHeader.startsWith("Bearer ")){
            return authHeader.substring(7);
        }
        return null;
    }


    public Long getCurrentUserId(String token) {
        if(token == null || token.isEmpty()) throw new ResourceNotFoundException("Invalid token");
        return jwtService.getIdFromToken(token);
    }
}
