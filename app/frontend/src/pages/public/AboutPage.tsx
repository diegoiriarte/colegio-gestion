export function AboutPage() {
  return (
    <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
      <section className="card space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-secondary">Información institucional</p>
        <h1 className="text-3xl font-bold text-slate-900">Educación cercana, innovadora y centrada en cada estudiante.</h1>
        <p className="text-slate-600">
          Nuestro colegio acompaña trayectorias educativas desde jardín hasta secundaria, promoviendo una comunidad participativa,
          inclusiva y comprometida con el aprendizaje.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl bg-slate-50 p-4">
            <h2 className="font-semibold">Misión</h2>
            <p className="mt-2 text-sm text-slate-600">Formar estudiantes autónomos, solidarios y preparados para su proyecto de vida.</p>
          </div>
          <div className="rounded-2xl bg-slate-50 p-4">
            <h2 className="font-semibold">Visión</h2>
            <p className="mt-2 text-sm text-slate-600">Ser una institución referente por su cercanía, calidad educativa e innovación responsable.</p>
          </div>
        </div>
      </section>
      <aside className="card space-y-4">
        <h2 className="text-xl font-semibold">Datos de contacto</h2>
        <ul className="space-y-3 text-sm text-slate-600">
          <li>📍 Av. Escolar 123, Buenos Aires</li>
          <li>📞 +54 11 5555-1234</li>
          <li>✉️ info@colegio.local</li>
          <li>🕒 Lun a Vie · 8:00 a 17:00</li>
        </ul>
      </aside>
    </div>
  );
}
