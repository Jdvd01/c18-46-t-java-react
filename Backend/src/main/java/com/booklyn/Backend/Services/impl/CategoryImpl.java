package com.booklyn.Backend.Services.impl;

import com.booklyn.Backend.Models.Book.Category;
import com.booklyn.Backend.Repository.Book.CategoryRepository;
import com.booklyn.Backend.Services.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.lang.annotation.Annotation;
import java.util.List;

@Service
public class CategoryImpl implements CategoryService {

    @Autowired
    CategoryRepository categoryRepository;

    @Override
    public Category saveCategory(Category category) {
        return categoryRepository.save(category);
    }

    @Override
    public Category getCategorybyId(Long id) {

        return categoryRepository.findById(id).orElseThrow();
    }

    @Override
    public List<Category> findAllCategories() {
        return categoryRepository.findAll();
    }
}
