import { useEffect, useState } from 'react';
import { divisionsService, studentsService } from '../../api/services';
import { FormField } from '../../components/FormField';
import { Table } from '../../components/Table';
import type { Division, Student } from '../../types';

export function StudentsPage() {
  const [students, setStudents] = useState<Student[]>([]);
  const [divisions, setDivisions] = useState<Division[]>([]);
  const [form, setForm] = useState({ name: '', lastName: '', divisionId: 1 });

  const load = async () => {
    const [studentsData, divisionsData] = await Promise.all([studentsService.list(), divisionsService.list()]);
    setStudents(studentsData);
    setDivisions(divisionsData);
  };

  useEffect(() => {
    load().catch(() => undefined);
  }, []);

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    await studentsService.create(form);
    setForm({ name: '', lastName: '', divisionId: divisions[0]?.id ?? 1 });
    await load();
  };

  return (
    <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
      <form className="card space-y-4" onSubmit={submit}>
        <h2 className="text-xl font-semibold">Nuevo alumno</h2>
        <FormField label="Nombre">
          <input className="input" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
        </FormField>
        <FormField label="Apellido">
          <input className="input" value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} required />
        </FormField>
        <FormField label="División">
          <select className="input" value={form.divisionId} onChange={(e) => setForm({ ...form, divisionId: Number(e.target.value) })}>
            {divisions.map((division) => (
              <option key={division.id} value={division.id}>
                {division.name} · {division.level}
              </option>
            ))}
          </select>
        </FormField>
        <button className="btn-primary" type="submit">Guardar alumno</button>
      </form>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Listado de alumnos</h2>
        <Table
          data={students}
          emptyMessage="Todavía no hay alumnos cargados."
          columns={[
            { key: 'name', label: 'Nombre' },
            { key: 'lastName', label: 'Apellido' },
            { key: 'divisionName', label: 'División' },
          ]}
        />
      </section>
    </div>
  );
}
