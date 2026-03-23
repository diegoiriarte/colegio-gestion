import { Outlet } from 'react-router-dom';
import { Sidebar } from '../components/Sidebar';
import { useAuth } from '../contexts/AuthContext';

export function AdminLayout() {
  const { userName, logout } = useAuth();

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-6 md:flex-row">
        <Sidebar />
        <div className="flex-1 space-y-6">
          <header className="flex flex-col gap-3 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-slate-500">Bienvenido/a</p>
              <h1 className="text-2xl font-semibold text-slate-900">{userName ?? 'Equipo administrativo'}</h1>
            </div>
            <button className="btn-secondary" onClick={logout}>
              Cerrar sesión
            </button>
          </header>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
