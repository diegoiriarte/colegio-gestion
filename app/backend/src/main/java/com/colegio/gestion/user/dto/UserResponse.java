package com.colegio.gestion.user.dto;

public record UserResponse(Long id, String name, String email, Long roleId, String roleName) {
}
