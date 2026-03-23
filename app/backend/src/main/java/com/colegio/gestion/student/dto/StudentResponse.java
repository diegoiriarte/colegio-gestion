package com.colegio.gestion.student.dto;

public record StudentResponse(Long id, String name, String lastName, Long divisionId, String divisionName) {
}
