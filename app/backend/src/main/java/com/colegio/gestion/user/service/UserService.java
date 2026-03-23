package com.colegio.gestion.user.service;

import com.colegio.gestion.common.ApiException;
import com.colegio.gestion.domain.Role;
import com.colegio.gestion.domain.User;
import com.colegio.gestion.role.repository.RoleRepository;
import com.colegio.gestion.user.dto.UserRequest;
import com.colegio.gestion.user.dto.UserResponse;
import com.colegio.gestion.user.repository.UserRepository;
import java.util.List;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final RoleRepository roleRepository;

    public UserService(UserRepository userRepository, RoleRepository roleRepository) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
    }

    public List<UserResponse> findAll() {
        return userRepository.findAll().stream()
                .map(user -> new UserResponse(user.getId(), user.getName(), user.getEmail(), user.getRole().getId(), user.getRole().getName()))
                .toList();
    }

    public UserResponse create(UserRequest request) {
        Role role = roleRepository.findById(request.roleId())
                .orElseThrow(() -> new ApiException("El rol seleccionado no existe."));

        User user = userRepository.save(User.builder()
                .name(request.name())
                .email(request.email())
                .role(role)
                .build());

        return new UserResponse(user.getId(), user.getName(), user.getEmail(), role.getId(), role.getName());
    }
}
