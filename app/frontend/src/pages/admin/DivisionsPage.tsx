import { useEffect, useState } from 'react';
import { divisionsService } from '../../api/services';
import { FormField } from '../../components/FormField';
import { Table } from '../../components/Table';
import type { Division, DivisionLevel } from '../../types';

const levels: DivisionLevel[] = ['JARDIN', 'PRIMARIA', 'SECUNDARIA'];

export function DivisionsPage() {
  const [divisions, setDivisions] = useState<Division[]>([]);
  const [form, setForm] = useState<Omit<Division, 'id'>>({ name: '', level: 'PRIMARIA' });

  const load = async () => {
    setDivisions(await divisionsService.list());
  };

  useEffect(() => {
    load().catch(() => undefined);
  }, []);

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    await divisionsService.create(form);
    setForm({ name: '', level: 'PRIMARIA' });
    await load();
  };

  return (
    <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
      <form className="card space-y-4" onSubmit={submit}>
        <h2 className="text-xl font-semibold">Nueva división</h2>
        <FormField label="Nombre">
          <input className="input" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
        </FormField>
        <FormField label="Nivel">
          <select className="input" value={form.level} onChange={(e) => setForm({ ...form, level: e.target.value as DivisionLevel })}>
            {levels.map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </select>
        </FormField>
        <button className="btn-primary" type="submit">Crear división</button>
      </form>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Divisiones registradas</h2>
        <Table
          data={divisions}
          emptyMessage="Todavía no hay divisiones cargadas."
          columns={[
            { key: 'id', label: 'ID' },
            { key: 'name', label: 'Nombre' },
            { key: 'level', label: 'Nivel' },
          ]}
        />
      </section>
    </div>
  );
}
