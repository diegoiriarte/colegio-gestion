package com.colegio.gestion.post.service;

import com.colegio.gestion.common.ApiException;
import com.colegio.gestion.post.dto.PostResponse;
import com.colegio.gestion.post.repository.PostRepository;
import java.util.Comparator;
import java.util.List;
import org.springframework.stereotype.Service;

@Service
public class PostService {

    private final PostRepository postRepository;

    public PostService(PostRepository postRepository) {
        this.postRepository = postRepository;
    }

    public List<PostResponse> findAll() {
        return postRepository.findAll().stream()
                .sorted(Comparator.comparing(post -> post.getCreatedAt(), Comparator.reverseOrder()))
                .map(post -> new PostResponse(post.getId(), post.getTitle(), post.getContent(), post.getCreatedAt()))
                .toList();
    }

    public PostResponse findById(Long id) {
        return postRepository.findById(id)
                .map(post -> new PostResponse(post.getId(), post.getTitle(), post.getContent(), post.getCreatedAt()))
                .orElseThrow(() -> new ApiException("La novedad solicitada no existe."));
    }
}
