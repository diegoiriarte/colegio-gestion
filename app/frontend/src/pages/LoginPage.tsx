import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormField } from '../components/FormField';
import { useAuth } from '../contexts/AuthContext';

export function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState('admin@colegio.local');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ email?: string; password?: string; submit?: string }>({});

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const nextErrors: typeof errors = {};

    if (!email.includes('@')) nextErrors.email = 'Ingresá un email válido.';
    if (!password.trim()) nextErrors.password = 'La contraseña es obligatoria.';

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    try {
      await login(email, password);
      navigate('/admin');
    } catch {
      setErrors({ submit: 'No pudimos iniciar sesión.' });
    }
  };

  return (
    <div className="mx-auto max-w-md">
      <div className="card">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-secondary">Backoffice</p>
        <h1 className="mt-2 text-3xl font-bold">Ingresar</h1>
        <p className="mt-2 text-sm text-slate-600">Accedé al panel para administrar usuarios, alumnos y divisiones.</p>
        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <FormField label="Email" error={errors.email}>
            <input className="input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </FormField>
          <FormField label="Contraseña" error={errors.password}>
            <input className="input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </FormField>
          {errors.submit ? <p className="text-sm text-rose-600">{errors.submit}</p> : null}
          <button type="submit" className="btn-primary w-full">
            Ingresar al panel
          </button>
        </form>
      </div>
    </div>
  );
}
