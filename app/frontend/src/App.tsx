import { Navigate, Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from './components/ProtectedRoute';
import { AdminLayout } from './layouts/AdminLayout';
import { PublicLayout } from './layouts/PublicLayout';
import { DashboardPage } from './pages/admin/DashboardPage';
import { DivisionsPage } from './pages/admin/DivisionsPage';
import { RolesPage } from './pages/admin/RolesPage';
import { StudentsPage } from './pages/admin/StudentsPage';
import { UsersPage } from './pages/admin/UsersPage';
import { LoginPage } from './pages/LoginPage';
import { AboutPage } from './pages/public/AboutPage';
import { HomePage } from './pages/public/HomePage';
import { PostDetailPage } from './pages/public/PostDetailPage';
import { PostsPage } from './pages/public/PostsPage';

export default function App() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/institucional" element={<AboutPage />} />
        <Route path="/novedades" element={<PostsPage />} />
        <Route path="/novedades/:postId" element={<PostDetailPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>

      <Route element={<ProtectedRoute />}>
        <Route element={<AdminLayout />}>
          <Route path="/admin" element={<DashboardPage />} />
          <Route path="/admin/usuarios" element={<UsersPage />} />
          <Route path="/admin/roles" element={<RolesPage />} />
          <Route path="/admin/alumnos" element={<StudentsPage />} />
          <Route path="/admin/divisiones" element={<DivisionsPage />} />
        </Route>
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
