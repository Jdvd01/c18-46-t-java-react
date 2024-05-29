package com.booklyn.Backend.Services;

import com.booklyn.Backend.Models.Book.Category;

import java.util.List;

public interface CategoryService {
    Category saveCategory(Category category);

    Category getCategorybyId(Long id);

    List<Category> findAllCategories();
}
