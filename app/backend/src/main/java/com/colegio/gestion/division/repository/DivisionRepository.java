package com.colegio.gestion.division.repository;

import com.colegio.gestion.domain.Division;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DivisionRepository extends JpaRepository<Division, Long> {
}
