package com.booklyn.Backend.Controllers;

import com.booklyn.Backend.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/users")
public class UserController {
    @Autowired
    private UserService userService;

    // =====================================================================
    //                              GET
    // =====================================================================

    /*PRUEBA*/
    @GetMapping("/prueba")
    @PreAuthorize("hasAuthority('ADMIN')")
    public String prueba(){
        return "endpoint protegido";
    }

    // =====================================================================
    //                              POST
    // =====================================================================


    // =====================================================================
    //                              PUT
    // =====================================================================


    // =====================================================================
    //                              PATCH
    // =====================================================================


    // =====================================================================
    //                              DELETE
    // =====================================================================
}
