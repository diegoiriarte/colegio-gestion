package com.colegio.gestion.student.service;

import com.colegio.gestion.common.ApiException;
import com.colegio.gestion.division.repository.DivisionRepository;
import com.colegio.gestion.domain.Division;
import com.colegio.gestion.domain.Student;
import com.colegio.gestion.student.dto.StudentRequest;
import com.colegio.gestion.student.dto.StudentResponse;
import com.colegio.gestion.student.repository.StudentRepository;
import java.util.List;
import org.springframework.stereotype.Service;

@Service
public class StudentService {

    private final StudentRepository studentRepository;
    private final DivisionRepository divisionRepository;

    public StudentService(StudentRepository studentRepository, DivisionRepository divisionRepository) {
        this.studentRepository = studentRepository;
        this.divisionRepository = divisionRepository;
    }

    public List<StudentResponse> findAll() {
        return studentRepository.findAll().stream()
                .map(student -> new StudentResponse(
                        student.getId(),
                        student.getName(),
                        student.getLastName(),
                        student.getDivision().getId(),
                        student.getDivision().getName()))
                .toList();
    }

    public StudentResponse create(StudentRequest request) {
        Division division = divisionRepository.findById(request.divisionId())
                .orElseThrow(() -> new ApiException("La división seleccionada no existe."));

        Student student = studentRepository.save(Student.builder()
                .name(request.name())
                .lastName(request.lastName())
                .division(division)
                .build());

        return new StudentResponse(student.getId(), student.getName(), student.getLastName(), division.getId(), division.getName());
    }
}
