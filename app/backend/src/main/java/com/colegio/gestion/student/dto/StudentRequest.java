package com.colegio.gestion.student.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record StudentRequest(
        @NotBlank(message = "El nombre es obligatorio.")
        String name,
        @NotBlank(message = "El apellido es obligatorio.")
        String lastName,
        @NotNull(message = "La división es obligatoria.")
        Long divisionId
) {
}
