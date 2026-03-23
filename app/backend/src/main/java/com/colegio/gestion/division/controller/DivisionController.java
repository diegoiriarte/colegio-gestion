package com.colegio.gestion.division.controller;

import com.colegio.gestion.division.dto.DivisionRequest;
import com.colegio.gestion.division.dto.DivisionResponse;
import com.colegio.gestion.division.service.DivisionService;
import jakarta.validation.Valid;
import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/divisions")
public class DivisionController {

    private final DivisionService divisionService;

    public DivisionController(DivisionService divisionService) {
        this.divisionService = divisionService;
    }

    @GetMapping
    public List<DivisionResponse> findAll() {
        return divisionService.findAll();
    }

    @PostMapping
    public DivisionResponse create(@Valid @RequestBody DivisionRequest request) {
        return divisionService.create(request);
    }
}
