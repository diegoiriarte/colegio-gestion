package com.colegio.gestion.common;

import java.time.OffsetDateTime;

public record ApiError(OffsetDateTime timestamp, int status, String error, String path) {
}
