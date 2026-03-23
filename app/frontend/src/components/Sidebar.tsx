import { NavLink } from 'react-router-dom';

const links = [
  { to: '/admin', label: 'Dashboard' },
  { to: '/admin/usuarios', label: 'Usuarios' },
  { to: '/admin/roles', label: 'Roles' },
  { to: '/admin/alumnos', label: 'Alumnos' },
  { to: '/admin/divisiones', label: 'Divisiones' },
];

export function Sidebar() {
  return (
    <aside className="w-full rounded-2xl bg-slate-900 p-4 text-white md:w-64">
      <p className="mb-4 text-xs uppercase tracking-[0.3em] text-slate-400">Administración</p>
      <nav className="space-y-2">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === '/admin'}
            className={({ isActive }) =>
              `block rounded-xl px-4 py-3 text-sm transition ${isActive ? 'bg-primary' : 'bg-slate-800 hover:bg-slate-700'}`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
