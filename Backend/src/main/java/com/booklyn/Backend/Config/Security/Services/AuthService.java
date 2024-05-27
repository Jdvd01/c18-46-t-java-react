package com.booklyn.Backend.Config.Security.Services;

import com.booklyn.Backend.Config.Security.DTO.AuthResponse;
import com.booklyn.Backend.Config.Security.DTO.LoginRequest;
import com.booklyn.Backend.Config.Security.DTO.RegisterRequest;
import com.booklyn.Backend.Config.Security.jwt.JwtService;
import com.booklyn.Backend.Exceptions.ResourceAlreadyExistException;
import com.booklyn.Backend.Models.Cart.Cart;
import com.booklyn.Backend.Models.User.*;
import com.booklyn.Backend.Repository.Cart.CartRepository;
import com.booklyn.Backend.Repository.User.AddressRepository;
import com.booklyn.Backend.Repository.User.InventoryRepository;
import com.booklyn.Backend.Repository.User.UserInfoRepository;
import com.booklyn.Backend.Repository.User.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.LinkedHashSet;
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
    @Autowired
    private CartRepository cartRepository;

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
        if(userRepository.existsByEmail(request.getEmail())) throw new ResourceAlreadyExistException("Email already exists.");

        Address address = addressRepository.save(Address.builder().build());

        UserInfo userInfo = userInfoRepository.save(UserInfo.builder()
                .firsName(request.getFirstName())
                .lastName(request.getLastName())
                .address(address)
                .build());

        Inventory inventory = inventoryRepository.save(Inventory.builder().build());

        Cart cart = cartRepository.save(Cart.builder().build());

        User user = userRepository.save(User.builder()
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(ERole.CUSTOMER)
                .userInfo(userInfo)
                .inventory(inventory)
                .cart(cart)
                .orders(new LinkedHashSet<>())
                .build());

        String token = jwtService.getToken(user, user.getAuthorities());

        return Optional.of(AuthResponse.builder()
                .token(token)
                .role(user.getRole())
                .email(user.getEmail())
                .build());
    }
}
