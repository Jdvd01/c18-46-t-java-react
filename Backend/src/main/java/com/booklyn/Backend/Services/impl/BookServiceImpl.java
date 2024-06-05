package com.booklyn.Backend.Services.impl;

import com.booklyn.Backend.DTO.BookDTO;
import com.booklyn.Backend.DTO.Requests.BookRequest;
import com.booklyn.Backend.Exceptions.ResourceAlreadyExistException;
import com.booklyn.Backend.Exceptions.ResourceNotFoundException;
import com.booklyn.Backend.Models.Book.Book;
import com.booklyn.Backend.Models.Book.Category;
import com.booklyn.Backend.Models.Book.ECategory;
import com.booklyn.Backend.Models.User.User;
import com.booklyn.Backend.Repository.Book.BookRepository;
import com.booklyn.Backend.Repository.User.UserRepository;
import com.booklyn.Backend.Services.BookService;
import com.booklyn.Backend.Specification.BookSpecification;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;
import org.apache.coyote.BadRequestException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class BookServiceImpl implements BookService {
    @Autowired
    BookRepository bookRepository;
    @PersistenceContext
    private EntityManager entityManager;
    @Autowired
    private UserRepository userRepository;

    @Override
    public Book saveBook(Book book) {
        return bookRepository.save(book);
    }

    @Override
    public BookDTO createBook(Long userId, BookRequest request) throws BadRequestException {

        if(bookRepository.existsByISBN(request.getISBN())) throw new ResourceAlreadyExistException("ISBN already exists.");
        if(!ECategory.contains(request.getCategory())) throw new BadRequestException(request.getCategory() + " category doesn't exists.");

        Optional<User> us = userRepository.findById(userId);
        if(us.isEmpty()) throw new ResourceNotFoundException("User with id: " + userId + " doesn't exists");
        User user = us.get();

        Book book = this.bookRepository.save(Book
                .builder()
                .title(request.getTitle())
                .author(request.getAuthor())
                .pages(request.getPages())
                .price(request.getPrice())
                .stock(request.getStock())
                .synopsis(request.getSynopsis())
                .ISBN(request.getISBN())
                .language(request.getLanguage())
                .category(ECategory.valueOf(request.getCategory()))
                .inventory(user.getInventory())
                .build());

        user.getInventory().getBook().add(book);
        userRepository.save(user);


        return this.convertToDTO(book);
    }

    @Override
    public Page<BookDTO> getAllBooksPageable(int page, int size) {
        Page<Book> books = bookRepository.findAll(PageRequest.of(page, size));
        if (books.isEmpty()) {
            throw new ResourceNotFoundException("Books not found");
        }
        List<BookDTO> bookDTOList = new ArrayList<>();
        for (Book book : books.getContent()) {
            bookDTOList.add(convertToDTO(book));
        }
        return new PageImpl<>(bookDTOList, books.getPageable(), books.getTotalElements());
    }

    @Override
    public List<BookDTO> getAllBooks() {
        List<Book> books = bookRepository.findAll();
        if (books.isEmpty()) {
            throw new ResourceNotFoundException("No books found");
        }
        return books.stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    @Override
    public void deleteBook(Book book) {

    }

    @Override
    public BookDTO getBookById(Long id) {
        Book book = bookRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("No book found"));
        return convertToDTO(book);
    }

    @Override
    public void deleteBookById(Long id) {

    }

    @Override
    public Page<BookDTO> findBooksByCriteria(String title, String author, String genre, String isbn, Pageable pageable) {
        Specification<Book> specification = Specification
                .where(BookSpecification.hasTitle(title))
                .and(BookSpecification.hasAuthor(author))
                .and(BookSpecification.hasCategory(genre))
                .and(BookSpecification.hasISBN(isbn));
        Page<Book> books = bookRepository.findAll(specification, pageable);
        if (books.isEmpty()) {
            throw new ResourceNotFoundException("No books found with the given criteria");
        }
        return books.map(this::convertToDTO);
    }

    @Override
    public Page<BookDTO> findBooksByRangePrice(Float minPrice, Float maxPrice, Pageable pageable) {
        Specification<Book> specification = Specification
                .where(BookSpecification.hasPriceBetween(minPrice, maxPrice));
        Page<Book> books = bookRepository.findAll(specification, pageable);
        if (books.isEmpty()) {
            throw new ResourceNotFoundException("No books found whith the criteria");
        }
        return books.map(this::convertToDTO);
    }

    private BookDTO convertToDTO(Book book) {
        return BookDTO.builder()
                .bookid(book.getBookid())
                .ISBN(book.getISBN())
                .title(book.getTitle())
                .author(book.getAuthor())
                .price(book.getPrice())
                .stock(book.getStock())
                .synopsis(book.getSynopsis())
                .pages(book.getPages())
                .language(book.getLanguage())
                .category(book.getCategory().toString())
                .build();
    }

}
