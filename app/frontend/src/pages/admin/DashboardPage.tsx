import { useEffect, useState } from 'react';
import { dashboardService } from '../../api/services';
import type { DashboardSummary } from '../../types';

const emptyState: DashboardSummary = {
  totalUsers: 0,
  totalStudents: 0,
  totalDivisions: 0,
  totalPosts: 0,
};

export function DashboardPage() {
  const [summary, setSummary] = useState<DashboardSummary>(emptyState);

  useEffect(() => {
    dashboardService.summary().then(setSummary).catch(() => setSummary(emptyState));
  }, []);

  return (
    <section className="space-y-6">
      <div>
        <p className="text-sm text-slate-500">Resumen del colegio</p>
        <h2 className="text-3xl font-bold text-slate-900">Dashboard</h2>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {[
          ['Usuarios', summary.totalUsers],
          ['Alumnos', summary.totalStudents],
          ['Divisiones', summary.totalDivisions],
          ['Novedades', summary.totalPosts],
        ].map(([label, value]) => (
          <article key={label} className="card">
            <p className="text-sm text-slate-500">{label}</p>
            <p className="mt-2 text-4xl font-bold text-primary">{value}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
