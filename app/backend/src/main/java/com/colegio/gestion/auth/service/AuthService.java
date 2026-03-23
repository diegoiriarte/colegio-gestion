package com.colegio.gestion.auth.service;

import com.colegio.gestion.auth.dto.LoginRequest;
import com.colegio.gestion.auth.dto.LoginResponse;
import com.colegio.gestion.common.ApiException;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    public LoginResponse login(LoginRequest request) {
        if (!request.email().endsWith("@colegio.local")) {
            throw new ApiException("Solo se permiten cuentas institucionales para este entorno inicial.");
        }

        String displayName = request.email().split("@")[0].replace('.', ' ');
        return new LoginResponse("mock-token-123", capitalize(displayName));
    }

    private String capitalize(String value) {
        if (value.isBlank()) {
            return "Administrador";
        }
        return Character.toUpperCase(value.charAt(0)) + value.substring(1);
    }
}
