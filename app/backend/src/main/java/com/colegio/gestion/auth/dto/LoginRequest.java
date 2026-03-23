package com.colegio.gestion.auth.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public record LoginRequest(
        @Email(message = "El email ingresado no es válido.")
        @NotBlank(message = "El email es obligatorio.")
        String email,
        @NotBlank(message = "La contraseña es obligatoria.")
        String password
) {
}
