package com.booklyn.Backend;

import com.booklyn.Backend.Models.Book.Book;
import com.booklyn.Backend.Models.Book.Category;
import com.booklyn.Backend.Services.impl.BookServiceImpl;
import com.booklyn.Backend.Services.impl.CategoryImpl;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@SpringBootApplication
public class BackendApplication {
    public static void main(String[] args) {
        SpringApplication.run(BackendApplication.class, args);
    }

}
