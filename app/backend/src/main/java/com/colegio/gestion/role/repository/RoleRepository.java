package com.colegio.gestion.role.repository;

import com.colegio.gestion.domain.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<Role, Long> {
}
