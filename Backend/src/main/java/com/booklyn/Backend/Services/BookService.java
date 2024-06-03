package com.booklyn.Backend.Services;

import com.booklyn.Backend.DTO.BookDTO;
import com.booklyn.Backend.DTO.Requests.BookRequest;
import com.booklyn.Backend.Models.Book.Book;
import org.apache.coyote.BadRequestException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface BookService {
    Book saveBook(Book book);

    Page<BookDTO> getAllBooksPageable(int page, int size);

    List<BookDTO> getAllBooks();

    void deleteBook(Book book);

    BookDTO getBookById(Long id);

    void deleteBookById(Long id);

    //buesqueda por conditions de libro
    Page<BookDTO> findBooksByCriteria(String title, String author, String genre, String isbn, Pageable pageable);

    Page<BookDTO> findBooksByRangePrice(Float minPrice, Float maxPrice, Pageable pageable);
    BookDTO createBook(Long id, BookRequest request) throws BadRequestException;
}
