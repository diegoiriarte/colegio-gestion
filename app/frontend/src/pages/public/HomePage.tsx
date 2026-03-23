import { Link } from 'react-router-dom';

export function HomePage() {
  return (
    <div className="space-y-10">
      <section className="grid items-center gap-8 rounded-[2rem] bg-gradient-to-br from-primary to-secondary px-6 py-12 text-white md:grid-cols-2 md:px-10">
        <div className="space-y-5">
          <span className="rounded-full bg-white/15 px-3 py-1 text-xs uppercase tracking-[0.3em]">Colegio en línea</span>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl">Una plataforma simple para comunicar y gestionar el día a día escolar.</h1>
          <p className="max-w-xl text-base text-blue-50 sm:text-lg">
            Información institucional, novedades, divisiones y gestión administrativa en una sola aplicación responsive.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/novedades" className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-primary">
              Ver novedades
            </Link>
            <Link to="/login" className="rounded-xl border border-white/40 px-5 py-3 text-sm font-semibold text-white">
              Ingresar al backoffice
            </Link>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            ['Gestión centralizada', 'Usuarios, roles, alumnos y divisiones en un único panel.'],
            ['Pensado para mobile', 'Interfaz clara y usable desde celulares y tablets.'],
            ['Bajo costo', 'Arquitectura simple para un solo colegio y despliegue directo.'],
            ['Escalable', 'Base sólida para sumar asistencias, pagos o boletines.'],
          ].map(([title, description]) => (
            <div key={title} className="rounded-2xl bg-white/10 p-4 backdrop-blur">
              <h2 className="mb-2 font-semibold">{title}</h2>
              <p className="text-sm text-blue-50">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {[
          ['Jardín', 'Acompañamos el desarrollo inicial con propuestas lúdicas y cercanas.'],
          ['Primaria', 'Fortalecemos aprendizajes significativos y comunidad educativa.'],
          ['Secundaria', 'Impulsamos autonomía, pensamiento crítico y proyectos vocacionales.'],
        ].map(([title, description]) => (
          <article key={title} className="card">
            <h3 className="mb-2 text-xl font-semibold text-slate-900">{title}</h3>
            <p className="text-sm text-slate-600">{description}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
