package com.colegio.gestion.common;

public class ApiException extends RuntimeException {
    public ApiException(String message) {
        super(message);
    }
}
