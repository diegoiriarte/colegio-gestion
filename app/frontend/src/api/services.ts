import { apiClient } from './client';
import type { DashboardSummary, Division, Post, Role, Student, User } from '../types';

export const authService = {
  login: (payload: { email: string; password: string }) =>
    apiClient.post<{ token: string; displayName: string }>('/auth/login', payload),
};

export const postsService = {
  list: () => apiClient.get<Post[]>('/posts'),
  getById: (id: string) => apiClient.get<Post>(`/posts/${id}`),
};

export const dashboardService = {
  summary: () => apiClient.get<DashboardSummary>('/dashboard/summary'),
};

export const usersService = {
  list: () => apiClient.get<User[]>('/users'),
  create: (payload: Omit<User, 'id' | 'roleName'>) => apiClient.post<User>('/users', payload),
};

export const rolesService = {
  list: () => apiClient.get<Role[]>('/roles'),
};

export const divisionsService = {
  list: () => apiClient.get<Division[]>('/divisions'),
  create: (payload: Omit<Division, 'id'>) => apiClient.post<Division>('/divisions', payload),
};

export const studentsService = {
  list: () => apiClient.get<Student[]>('/students'),
  create: (payload: Omit<Student, 'id' | 'divisionName'>) => apiClient.post<Student>('/students', payload),
};
