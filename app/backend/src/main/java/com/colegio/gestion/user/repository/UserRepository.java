package com.colegio.gestion.user.repository;

import com.colegio.gestion.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
