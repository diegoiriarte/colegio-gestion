package com.colegio.gestion.user.controller;

import com.colegio.gestion.user.dto.UserRequest;
import com.colegio.gestion.user.dto.UserResponse;
import com.colegio.gestion.user.service.UserService;
import jakarta.validation.Valid;
import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public List<UserResponse> findAll() {
        return userService.findAll();
    }

    @PostMapping
    public UserResponse create(@Valid @RequestBody UserRequest request) {
        return userService.create(request);
    }
}
