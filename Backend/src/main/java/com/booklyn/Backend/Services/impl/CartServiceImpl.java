package com.booklyn.Backend.Services.impl;

import com.booklyn.Backend.DTO.Responses.CartResponse;
import com.booklyn.Backend.Exceptions.ResourceNotFoundException;
import com.booklyn.Backend.Models.Book.Book;
import com.booklyn.Backend.Models.Cart.Cart;
import com.booklyn.Backend.Models.Cart.Product;
import com.booklyn.Backend.Repository.Book.BookRepository;
import com.booklyn.Backend.Repository.Cart.CartRepository;
import com.booklyn.Backend.Repository.Cart.ProductRepository;
import com.booklyn.Backend.Services.CartService;
import org.apache.coyote.BadRequestException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;
import java.util.Iterator;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class CartServiceImpl implements CartService {

    @Autowired
    private CartRepository cartRepository;
    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private BookRepository bookRepository;


    @Override
    public CartResponse getUserCart(Long userId) throws BadRequestException {
        Cart cart = this.getCartByUserId(userId);
        return this.convertCartToCartResponse(cart);
    }

    @Override
    public CartResponse addItemToCart(Long userId, Long bookId, Integer quantity) throws BadRequestException {
        Cart cart = this.getCartByUserId(userId);
        cart.setLastUpdate(LocalDateTime.now());
        Optional<Product> optProduct= this.productRepository.findByBookIdAndCart_CartId(bookId, userId);
        if(optProduct.isPresent()) return this.updateCartProduct(userId, optProduct.get().getProductId(), quantity);

        Optional<Book> optBook = this.bookRepository.findById(bookId);
        if(optBook.isEmpty()) throw new ResourceNotFoundException("Book doesn't exists");

        if(optBook.get().getStock()<quantity) throw new BadRequestException("The book doesn't have enough stock.");
        Book book= optBook.get();
        Product product = productRepository.save(Product
                .builder()
                .bookTitle(book.getTitle())
                .bookId(bookId)
                .bookAuthor(book.getAuthor())
                .ISBN(book.getISBN())
                .quantity(quantity)
                .price(book.getPrice())
                .language(book.getLanguage())
                .cart(cart)
                .build());

        book.setStock(book.getStock()-quantity);
        this.bookRepository.save(book);
        cart.getProduct().add(product);
        return this.convertCartToCartResponse(this.saveCart(cart));
    }

    @Override
    public CartResponse updateCartProduct(Long userId, Long productId, Integer quantity) throws BadRequestException {
        Cart cart = this.getCartByUserId(userId);
        cart.setLastUpdate(LocalDateTime.now());
        Optional<Product> optProduct = this.productRepository.findById(productId);
        if (optProduct.isEmpty()) {
            throw new ResourceNotFoundException("Product doesn't exist.");
        }

        Product product = optProduct.get();
        Optional<Book> bookOpt = this.bookRepository.findById(product.getBookId());
        if (bookOpt.isEmpty()) {
            throw new ResourceNotFoundException("Book doesn't exist.");
        }

        Book book = bookOpt.get();
        int difference = quantity - product.getQuantity();

        if (difference > 0) {
            if (book.getStock() < difference) {
                throw new BadRequestException("The book doesn't have enough stock.");
            }
            book.setStock(book.getStock() - difference);
        } else if (difference < 0) {
            book.setStock(book.getStock() - difference); // Agregamos la diferencia al stock
        }

        bookRepository.save(book);

        // Actualizamos la cantidad del producto en el carrito
        product.setQuantity(quantity);
        product = productRepository.save(product);

        cart.getProduct().add(product);
        return this.convertCartToCartResponse(this.saveCart(cart));
    }


    @Override
    public CartResponse removeProductFromCart(Long userId, Long productId) throws BadRequestException {
        Cart cart = getCartByUserId(userId);

        Iterator<Product> iterator = cart.getProduct().iterator();
        Product productToRemove = null;

        while (iterator.hasNext()) {
            Product product = iterator.next();
            if (Objects.equals(product.getProductId(), productId)) {
                productToRemove=product;
                iterator.remove();
                break;
            }
        }

        if(productToRemove == null) throw new ResourceNotFoundException("Product doesn't exists.");
        Optional<Book> book = this.bookRepository.findById(productToRemove.getBookId());
        if(book.isEmpty()) throw new ResourceNotFoundException("Book doesn't exists.");
        book.get().setStock(book.get().getStock()+productToRemove.getQuantity());
        this.bookRepository.save(book.get());

        this.productRepository.delete(productToRemove);

        return convertCartToCartResponse(this.saveCart(cart));
    }

    @Transactional
    public void cleanCart(Long userId) throws BadRequestException {
        Cart cart = getCartByUserId(userId);

        Iterator<Product> iterator = cart.getProduct().iterator();
        while (iterator.hasNext()) {
            Product product = iterator.next();
            Optional<Book> optBook = this.bookRepository.findById(product.getBookId());
            if (optBook.isEmpty()) {
                throw new ResourceNotFoundException("Book doesn't exist");
            }
            optBook.get().setStock(optBook.get().getStock() + product.getQuantity());
            this.bookRepository.save(optBook.get()); // Guardar el stock actualizado del libro

            this.productRepository.delete(product); // Eliminar el producto de la base de datos
            iterator.remove(); // Eliminar el producto del carrito
        }

        cartRepository.save(cart); // Guardar el carrito actualizado
    }


    @Override
    public CartResponse checkout(Long userId) {
        return null;
    }


    private CartResponse convertCartToCartResponse(Cart cart) {
        return CartResponse.builder()
                .products(cart.getProduct())
                .totalPrice(cart.calculateTotalPrice())
                .build();
    }

    private Cart saveCart(Cart cart){
        cart.calculateTotalPrice();
        return this.cartRepository.save(cart);
    }

    private Cart getCartByUserId(Long userId) throws BadRequestException {
        if(userId>1 || userId==null) throw new BadRequestException("User id cannot be less than 1 or null");
        return this.cartRepository.findByUserId(userId);
    }

    @Scheduled(cron = "0 0 */48 * * *") // Ejecutar cada 48 horas
    @Transactional
    public void cleanInactiveCarts() throws BadRequestException {
        LocalDateTime now = LocalDateTime.now();
        List<Cart> carts = cartRepository.findAll();
        for (Cart cart : carts) {
            if (ChronoUnit.SECONDS.between(cart.getLastUpdate(), now) >= 60) {
                this.cleanCart(cart.getUser().getId());
            }
        }
    }

}
