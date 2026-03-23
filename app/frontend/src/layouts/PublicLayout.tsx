import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/Navbar';

export function PublicLayout() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-8">
        <Outlet />
      </main>
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-slate-500">
          Colegio Gestión · Plataforma simple para la administración escolar.
        </div>
      </footer>
    </div>
  );
}
