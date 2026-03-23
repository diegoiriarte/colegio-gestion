import { useEffect, useState } from 'react';
import { Table } from '../../components/Table';
import { rolesService } from '../../api/services';
import type { Role } from '../../types';

export function RolesPage() {
  const [roles, setRoles] = useState<Role[]>([]);

  useEffect(() => {
    rolesService.list().then(setRoles).catch(() => undefined);
  }, []);

  return (
    <section className="space-y-3">
      <h2 className="text-xl font-semibold">Roles del sistema</h2>
      <Table
        data={roles}
        emptyMessage="No hay roles disponibles."
        columns={[
          { key: 'id', label: 'ID' },
          { key: 'name', label: 'Nombre' },
        ]}
      />
    </section>
  );
}
