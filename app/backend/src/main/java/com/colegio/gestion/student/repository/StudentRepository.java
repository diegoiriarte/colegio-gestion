package com.colegio.gestion.student.repository;

import com.colegio.gestion.domain.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student, Long> {
}
