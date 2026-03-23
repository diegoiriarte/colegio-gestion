package com.colegio.gestion.post.dto;

import java.time.OffsetDateTime;

public record PostResponse(Long id, String title, String content, OffsetDateTime createdAt) {
}
