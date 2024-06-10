package com.booklyn.Backend.Repository.User;

import com.booklyn.Backend.Models.User.Inventory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InventoryRepository extends JpaRepository<Inventory, Long> {
}
