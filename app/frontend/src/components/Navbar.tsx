import { Link, NavLink } from 'react-router-dom';

const links = [
  { to: '/', label: 'Inicio' },
  { to: '/institucional', label: 'Institucional' },
  { to: '/novedades', label: 'Novedades' },
  { to: '/admin', label: 'Backoffice' },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-4">
        <Link to="/" className="text-lg font-bold text-primary">
          Colegio Gestión
        </Link>
        <nav className="flex flex-wrap gap-2 text-sm font-medium text-slate-600">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `rounded-full px-3 py-2 transition ${isActive ? 'bg-primary text-white' : 'hover:bg-slate-100'}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
