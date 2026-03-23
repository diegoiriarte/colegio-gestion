package com.colegio.gestion.division.service;

import com.colegio.gestion.division.dto.DivisionRequest;
import com.colegio.gestion.division.dto.DivisionResponse;
import com.colegio.gestion.division.repository.DivisionRepository;
import com.colegio.gestion.domain.Division;
import java.util.List;
import org.springframework.stereotype.Service;

@Service
public class DivisionService {

    private final DivisionRepository divisionRepository;

    public DivisionService(DivisionRepository divisionRepository) {
        this.divisionRepository = divisionRepository;
    }

    public List<DivisionResponse> findAll() {
        return divisionRepository.findAll().stream()
                .map(division -> new DivisionResponse(division.getId(), division.getName(), division.getLevel()))
                .toList();
    }

    public DivisionResponse create(DivisionRequest request) {
        Division division = divisionRepository.save(Division.builder()
                .name(request.name())
                .level(request.level())
                .build());
        return new DivisionResponse(division.getId(), division.getName(), division.getLevel());
    }
}
