package com.andres.backend.cartapp.backend_cartapp.services;

import java.util.List;

import com.andres.backend.cartapp.backend_cartapp.models.entities.Product;

public interface ProductService {

    // Metodo para devolver todos los registros de los productos
    List<Product> findAll();
}
