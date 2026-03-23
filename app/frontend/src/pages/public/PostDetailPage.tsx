import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { postsService } from '../../api/services';
import type { Post } from '../../types';

export function PostDetailPage() {
  const { postId = '' } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    postsService.getById(postId).then(setPost).catch(() => setError('No encontramos la novedad solicitada.'));
  }, [postId]);

  if (error) {
    return <div className="card text-rose-600">{error}</div>;
  }

  if (!post) {
    return <div className="card">Cargando novedad...</div>;
  }

  return (
    <article className="card mx-auto max-w-3xl space-y-4">
      <Link to="/novedades" className="text-sm font-semibold text-primary">
        ← Volver a novedades
      </Link>
      <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{new Date(post.createdAt).toLocaleDateString('es-AR')}</p>
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p className="whitespace-pre-line text-base leading-7 text-slate-700">{post.content}</p>
    </article>
  );
}
