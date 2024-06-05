package com.booklyn.Backend.Controllers;

import com.booklyn.Backend.Config.Security.SecurityConfig;
import com.booklyn.Backend.Config.Security.Services.SecurityService;
import com.booklyn.Backend.DTO.BookDTO;
import com.booklyn.Backend.DTO.Requests.BookRequest;
import com.booklyn.Backend.DTO.Responses.SuccesResponse;
import com.booklyn.Backend.Models.Book.Book;
import com.booklyn.Backend.Services.BookService;
import com.booklyn.Backend.Utils.Utils;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import org.apache.coyote.BadRequestException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.util.StringUtils;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/books")
public class BookController {
    private String url = "/api/v1/books";

    @Autowired
    private BookService bookService;
    @Autowired
    private Utils utils;

    // =====================================================================
    //                              GET
    // =====================================================================
    @GetMapping("/allBooks")
    public ResponseEntity<SuccesResponse> findAllBooksPageable(@RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "10") int size) {
        Page<BookDTO> books = bookService.getAllBooksPageable(page, size);
        return new ResponseEntity<>(SuccesResponse
                .builder()
                .statusCode("200")
                .message("books found")
                .object(books.getContent())
                .url(url + "/allbooks" + "?page=" + page + "&size=" + size)
                .build(), HttpStatus.CREATED);
    }

    @GetMapping("/findAll")
    public ResponseEntity<SuccesResponse> findAll() {
        List<BookDTO> books = bookService.getAllBooks();
        if (books.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        return new ResponseEntity<>(SuccesResponse
                .builder()
                .statusCode("200")
                .message("books found")
                .object(books)
                .url(url + "/findAll")
                .build(), HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<SuccesResponse> getBookDetails(@PathVariable Long id) {
        BookDTO book = bookService.getBookById(id);
        if (book == null) {
            return ResponseEntity.notFound().build();
        }
        return new ResponseEntity<>(SuccesResponse
                .builder()
                .statusCode("200")
                .message("Book found")
                .object(book)
                .url(url + "/" + id)
                .build(), HttpStatus.CREATED);
    }


    // Endpoint para la busqueda por parametros
    @GetMapping("/search")
    public ResponseEntity<SuccesResponse> findBooksByCriteria(
            @RequestParam(required = false) String title,
            @RequestParam(required = false) String author,
            @RequestParam(required = false) String genre,
            @RequestParam(required = false) String isbn,

            Pageable pageable
    ) {
        Page<BookDTO> books = bookService.findBooksByCriteria(title, author, genre, isbn, pageable);

        return new ResponseEntity<>(SuccesResponse
                .builder()
                .statusCode("200")
                .message(String.format("Books found with criteria: Title='%s', Author='%s', Genre='%s', Pageable='%s'", title, author, genre, pageable))
                .object(books.getContent())
                .url(url + "/search")
                .build(), HttpStatus.CREATED);
    }

    @GetMapping("/searchByPrice")
    public ResponseEntity<SuccesResponse> findBooksByPrice(
            @RequestParam(required = false) Float minPrice,
            @RequestParam(required = false) Float maxPrice,
            Pageable pageable) {
        Page<BookDTO> books = bookService.findBooksByRangePrice(minPrice, maxPrice, pageable);
        return new ResponseEntity<>(SuccesResponse
                .builder()
                .statusCode("200")
                .message("Book found")
                .object(books.getContent())
                .url(url + "searchByprice")
                .build(), HttpStatus.CREATED);
    }
    // =====================================================================
    //                              POST
    // =====================================================================
    @PostMapping()
    @PreAuthorize("hasAnyAuthority('ADMIN','CUSTOMER')")
    public ResponseEntity<SuccesResponse> createBook(@Valid @RequestBody BookRequest request, HttpServletRequest httpRequest, BindingResult bindingResult) throws BadRequestException, BadRequestException {
        if(bindingResult.hasErrors()){
            throw new BadRequestException(bindingResult.getFieldError().getDefaultMessage());
        }

        String token = utils.getTokenFromRequest(httpRequest);
        Long userId = this.utils.getCurrentUserId(token);
        BookDTO bookDTO = this.bookService.createBook(userId, request);

        return new ResponseEntity<>(SuccesResponse
                .builder()
                .statusCode("201")
                .message("Book created")
                .object(bookDTO)
                .url(url)
                .build(), HttpStatus.CREATED);

    }

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
