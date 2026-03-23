import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { postsService } from '../../api/services';
import type { Post } from '../../types';

export function PostsPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    postsService.list().then(setPosts).catch(() => setError('No se pudieron cargar las novedades.'));
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-secondary">Novedades</p>
        <h1 className="text-3xl font-bold text-slate-900">Últimas noticias institucionales</h1>
      </div>
      {error ? <div className="card text-rose-600">{error}</div> : null}
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {posts.map((post) => (
          <article key={post.id} className="card flex h-full flex-col">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{new Date(post.createdAt).toLocaleDateString('es-AR')}</p>
            <h2 className="mt-3 text-xl font-semibold">{post.title}</h2>
            <p className="mt-3 line-clamp-4 text-sm text-slate-600">{post.content}</p>
            <Link to={`/novedades/${post.id}`} className="mt-6 text-sm font-semibold text-primary">
              Leer más →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
