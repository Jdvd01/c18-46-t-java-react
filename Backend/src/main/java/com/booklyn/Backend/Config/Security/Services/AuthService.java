package com.booklyn.Backend.Config.Security.Services;

import com.booklyn.Backend.Config.Security.DTO.AuthResponse;
import com.booklyn.Backend.Config.Security.DTO.LoginRequest;
import com.booklyn.Backend.Config.Security.DTO.RegisterRequest;
import com.booklyn.Backend.Config.Security.jwt.JwtService;
import com.booklyn.Backend.Models.User.ERole;
import com.booklyn.Backend.Models.User.User;
import com.booklyn.Backend.Repository.User.AddressRepository;
import com.booklyn.Backend.Repository.User.InventoryRepository;
import com.booklyn.Backend.Repository.User.UserInfoRepository;
import com.booklyn.Backend.Repository.User.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AuthService {

    @Autowired
    private JwtService jwtService;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private AddressRepository addressRepository;
    @Autowired
    private UserInfoRepository userInfoRepository;
    @Autowired
    private InventoryRepository inventoryRepository;

    // =====================================================================
    //                              LOGIN
    // =====================================================================
    public Optional<AuthResponse> login(LoginRequest request) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
        User user = userRepository.findByEmail(request.getEmail()).orElseThrow();
        String token = jwtService.getToken(user, user.getAuthorities());

        return Optional.of(AuthResponse.builder()
                .email(user.getEmail())
                .role(user.getRole())
                .token(token)
                .build());

    }

    // =====================================================================
    //                              REGISTER
    // =====================================================================

    public Optional<AuthResponse> register(RegisterRequest request){
        /*if(userRepository.existsByEmail(request.getEmail())) throw new ResourceAlreadyExistException("El email ya está en uso.");*/

        User user = userRepository.save(User
                .builder()
                .role(ERole.ADMIN)
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .build());

        String token = jwtService.getToken(user, user.getAuthorities());

        return Optional.of(AuthResponse.builder()
                .token(token)
                .role(user.getRole())
                .email(user.getEmail())
                .build());
    }
}
