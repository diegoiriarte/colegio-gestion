package com.colegio.gestion.user.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record UserRequest(
        @NotBlank(message = "El nombre es obligatorio.")
        String name,
        @Email(message = "El email no es válido.")
        @NotBlank(message = "El email es obligatorio.")
        String email,
        @NotNull(message = "El rol es obligatorio.")
        Long roleId
) {
}
