package com.andres.backend.cartapp.backend_cartapp.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.andres.backend.cartapp.backend_cartapp.models.entities.Product;
import com.andres.backend.cartapp.backend_cartapp.services.ProductService;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
public class ProductController {

    @Autowired
    private ProductService service;

    // Realiza una solicitud de tipo GET a la URL http://localhost:8080/products
    @GetMapping("/products")
    public List<Product> list() {
        return service.findAll();
    };
}
