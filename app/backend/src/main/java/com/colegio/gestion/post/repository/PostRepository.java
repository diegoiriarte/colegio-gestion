package com.colegio.gestion.post.repository;

import com.colegio.gestion.domain.Post;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostRepository extends JpaRepository<Post, Long> {
}
