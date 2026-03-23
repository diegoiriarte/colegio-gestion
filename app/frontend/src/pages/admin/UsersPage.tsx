import { useEffect, useState } from 'react';
import { FormField } from '../../components/FormField';
import { Table } from '../../components/Table';
import { rolesService, usersService } from '../../api/services';
import type { Role, User } from '../../types';

export function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [roles, setRoles] = useState<Role[]>([]);
  const [form, setForm] = useState({ name: '', email: '', roleId: 1 });

  const load = async () => {
    const [usersData, rolesData] = await Promise.all([usersService.list(), rolesService.list()]);
    setUsers(usersData);
    setRoles(rolesData);
  };

  useEffect(() => {
    load().catch(() => undefined);
  }, []);

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    await usersService.create(form);
    setForm({ name: '', email: '', roleId: roles[0]?.id ?? 1 });
    await load();
  };

  return (
    <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
      <form className="card space-y-4" onSubmit={submit}>
        <h2 className="text-xl font-semibold">Nuevo usuario</h2>
        <FormField label="Nombre">
          <input className="input" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
        </FormField>
        <FormField label="Email">
          <input className="input" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
        </FormField>
        <FormField label="Rol">
          <select className="input" value={form.roleId} onChange={(e) => setForm({ ...form, roleId: Number(e.target.value) })}>
            {roles.map((role) => (
              <option key={role.id} value={role.id}>
                {role.name}
              </option>
            ))}
          </select>
        </FormField>
        <button className="btn-primary" type="submit">Crear usuario</button>
      </form>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Usuarios activos</h2>
        <Table
          data={users}
          emptyMessage="Todavía no hay usuarios cargados."
          columns={[
            { key: 'name', label: 'Nombre' },
            { key: 'email', label: 'Email' },
            { key: 'roleName', label: 'Rol' },
          ]}
        />
      </section>
    </div>
  );
}
