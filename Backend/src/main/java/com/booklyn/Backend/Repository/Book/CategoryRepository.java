package com.booklyn.Backend.Repository.Book;

import com.booklyn.Backend.Models.Book.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {
}
