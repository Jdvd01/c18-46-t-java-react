package com.booklyn.Backend.Specification;

import com.booklyn.Backend.Models.Book.Book;
import com.booklyn.Backend.Models.Reviews.Review;
import jakarta.persistence.criteria.*;
import org.springframework.data.jpa.domain.Specification;

public class BookSpecification {
    public static Specification<Book> hasTitle(String title) {
        return (root, query, criteriaBuilder) ->
                title == null ? null : criteriaBuilder.like(criteriaBuilder.lower(root.get("title")), "%" + title.toLowerCase() + "%");
    }

    public static Specification<Book> hasAuthor(String author) {
        return (root, query, criteriaBuilder) ->
                author == null ? null : criteriaBuilder.like(criteriaBuilder.lower(root.get("author")), "%" + author.toLowerCase() + "%");
    }

    public static Specification<Book> hasCategory(String categoryName) {
        return (root, query, criteriaBuilder) -> {
            if (categoryName == null) return null;
            return criteriaBuilder.like(criteriaBuilder.lower(root.get("category")), "%" + categoryName.toLowerCase() + "%");
        };
    }

    public static Specification<Book> hasISBN(String isbn) {
        return (root, query, criteriaBuilder) ->
                isbn == null ? null : criteriaBuilder.like(criteriaBuilder.lower(root.get("ISBN")), "%" + isbn.toLowerCase() + "%");
    }

    public static Specification<Book> hasPriceBetween(Float minPrice, Float maxPrice) {
        return (root, query, criteriaBuilder) -> {
            if (minPrice == null && maxPrice == null) {
                return null;
            }
            if (minPrice != null && maxPrice != null) {
                return criteriaBuilder.between(root.get("price"), minPrice, maxPrice);
            }
            if (minPrice != null) {
                return criteriaBuilder.greaterThanOrEqualTo(root.get("price"), minPrice);
            }
            return criteriaBuilder.lessThanOrEqualTo(root.get("price"), maxPrice);
        };
    }

    public static Specification<Book> orderByAverageRating() {
        return new Specification<Book>() {
            @Override
            public Predicate toPredicate(Root<Book> root, CriteriaQuery<?> query, CriteriaBuilder criteriaBuilder) {
                Join<Book, Review> reviewsJoin = root.join("reviews", JoinType.LEFT);
                query.groupBy(root.get("id"));
                query.having(criteriaBuilder.isNotNull(criteriaBuilder.avg(reviewsJoin.get("rating"))));
                query.orderBy(criteriaBuilder.desc(criteriaBuilder.avg(reviewsJoin.get("rating"))));
                return query.getRestriction();
            }
        };
    }
}
