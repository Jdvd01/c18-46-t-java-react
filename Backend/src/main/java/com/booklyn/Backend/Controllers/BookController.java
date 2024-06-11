package com.booklyn.Backend.Controllers;

import com.booklyn.Backend.DTO.BookDTO;
import com.booklyn.Backend.DTO.Requests.BookRequest;
import com.booklyn.Backend.DTO.Responses.SuccessResponse;
import com.booklyn.Backend.Services.BookService;
import com.booklyn.Backend.Utils.Utils;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import org.apache.coyote.BadRequestException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
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
    public ResponseEntity<SuccessResponse> findAllBooksPageable(@RequestParam(defaultValue = "0") int page,
                                                                @RequestParam(defaultValue = "9") int size) {
        Page<BookDTO> books = bookService.getAllBooksPageable(page, size);
        return new ResponseEntity<>(SuccessResponse
                .builder()
                .statusCode("200")
                .message("books found")
                .object(books)
                .url(url + "/allbooks" + "?page=" + page + "&size=" + size)
                .build(), HttpStatus.OK);
    }

    @GetMapping("/findAll")
    public ResponseEntity<SuccessResponse> findAll() {
        List<BookDTO> books = bookService.getAllBooks();
        if (books.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        return new ResponseEntity<>(SuccessResponse
                .builder()
                .statusCode("200")
                .message("books found")
                .object(books)
                .url(url + "/findAll")
                .build(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<SuccessResponse> getBookDetails(@PathVariable Long id) {
        BookDTO book = bookService.getBookById(id);
        if (book == null) {
            return ResponseEntity.notFound().build();
        }
        return new ResponseEntity<>(SuccessResponse
                .builder()
                .statusCode("200")
                .message("Book found")
                .object(book)
                .url(url + "/" + id)
                .build(), HttpStatus.OK);
    }


    // Endpoint para la busqueda por parametros
    @GetMapping("/search")
    public ResponseEntity<SuccessResponse> findBooksByCriteria(
            @RequestParam(required = false) String title,
            @RequestParam(required = false) String author,
            @RequestParam(required = false) String genre,
            @RequestParam(required = false) String isbn,

            Pageable pageable
    ) {
        Page<BookDTO> books = bookService.findBooksByCriteria(title, author, genre, isbn, pageable);

        return new ResponseEntity<>(SuccessResponse
                .builder()
                .statusCode("200")
                .message(String.format("Books found with criteria: Title='%s', Author='%s', Genre='%s', Pageable='%s'", title, author, genre, pageable))
                .object(books.getContent())
                .url(url + "/search")
                .build(), HttpStatus.OK);
    }

    @GetMapping("/searchByPrice")
    public ResponseEntity<SuccessResponse> findBooksByPrice(
            @RequestParam(required = false) Float minPrice,
            @RequestParam(required = false) Float maxPrice,
            @RequestParam(defaultValue = "1") int page,
            @RequestParam(defaultValue = "9") int size) {
        Pageable pageable = PageRequest.of(page - 1, size);

        Page<BookDTO> books = bookService.findBooksByRangePrice(minPrice, maxPrice, pageable);
        return new ResponseEntity<>(SuccessResponse
                .builder()
                .statusCode("200")
                .message("Book found")
                .object(books.getContent())
                .url(url + "searchByprice")
                .build(), HttpStatus.OK);
    }

    @GetMapping("/ByaverageRating")
    public ResponseEntity<SuccessResponse> findBooksByRating(
            @RequestParam(defaultValue = "1") int page,
            @RequestParam(defaultValue = "9") int size) {
        Pageable pageable = PageRequest.of(page - 1, size);
        Page<BookDTO> books = bookService.findTopRatedBooks(pageable);
        return ResponseEntity.ok().body(SuccessResponse.builder()
                .object(books.getContent())
                .url(url + "Top rate books")
                .statusCode("200")
                .message("Top rate books found")
                .build());
    }

    // =====================================================================
    //                              POST
    // =====================================================================
    @PostMapping()
    @PreAuthorize("hasAnyAuthority('ADMIN','SALESMAN')")
    public ResponseEntity<SuccessResponse> createBook(@Valid @RequestBody BookRequest request, HttpServletRequest httpRequest, BindingResult bindingResult) throws BadRequestException {
        if (bindingResult.hasErrors()) {
            throw new BadRequestException(bindingResult.getFieldError().getDefaultMessage());
        }

        String token = utils.getTokenFromRequest(httpRequest);
        Long userId = this.utils.getCurrentUserId(token);
        BookDTO bookDTO = this.bookService.createBook(userId, request);

        return new ResponseEntity<>(SuccessResponse
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
