package com.colegio.gestion.division.dto;

import com.colegio.gestion.domain.DivisionLevel;

public record DivisionResponse(Long id, String name, DivisionLevel level) {
}
