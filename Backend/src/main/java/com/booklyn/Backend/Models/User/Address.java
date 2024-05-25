package com.booklyn.Backend.Models.User;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@Entity
@Table(name = "addresses")
public class Address {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long addressid;
    private String street;
    private String city;
    private String state;
    private String postalCode;
    private String country;
    @OneToOne(mappedBy = "address")
    @JsonBackReference
    private UserInfo userInfo;
}
