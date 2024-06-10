package com.booklyn.Backend.Repository.Review;

import com.booklyn.Backend.Models.Book.Book;
import com.booklyn.Backend.Models.Reviews.Review;
import com.booklyn.Backend.Models.User.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReviewRepository extends JpaRepository<Review, Long> {
    List<Review> findByBook(Book book);

    List<Review> findByUser(User user);
}
