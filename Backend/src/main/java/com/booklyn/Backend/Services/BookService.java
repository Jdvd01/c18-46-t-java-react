package com.booklyn.Backend.Services;

import com.booklyn.Backend.Models.Book;
import com.booklyn.Backend.Repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BookService {
    @Autowired
    BookRepository bookRepository;

    public Book saveBook(Book book) {
        return bookRepository.save(book);
    }
}
