package com.colegio.gestion.dashboard.service;

import com.colegio.gestion.dashboard.dto.DashboardSummaryResponse;
import com.colegio.gestion.division.repository.DivisionRepository;
import com.colegio.gestion.post.repository.PostRepository;
import com.colegio.gestion.student.repository.StudentRepository;
import com.colegio.gestion.user.repository.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class DashboardService {

    private final UserRepository userRepository;
    private final StudentRepository studentRepository;
    private final DivisionRepository divisionRepository;
    private final PostRepository postRepository;

    public DashboardService(
            UserRepository userRepository,
            StudentRepository studentRepository,
            DivisionRepository divisionRepository,
            PostRepository postRepository
    ) {
        this.userRepository = userRepository;
        this.studentRepository = studentRepository;
        this.divisionRepository = divisionRepository;
        this.postRepository = postRepository;
    }

    public DashboardSummaryResponse getSummary() {
        return new DashboardSummaryResponse(
                userRepository.count(),
                studentRepository.count(),
                divisionRepository.count(),
                postRepository.count());
    }
}
