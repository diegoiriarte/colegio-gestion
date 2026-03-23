package com.colegio.gestion.division.dto;

import com.colegio.gestion.domain.DivisionLevel;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record DivisionRequest(
        @NotBlank(message = "El nombre de la división es obligatorio.")
        String name,
        @NotNull(message = "El nivel es obligatorio.")
        DivisionLevel level
) {
}
