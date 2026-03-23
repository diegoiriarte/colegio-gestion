export type Role = {
  id: number;
  name: string;
};

export type User = {
  id: number;
  name: string;
  email: string;
  roleId: number;
  roleName?: string;
};

export type DivisionLevel = 'JARDIN' | 'PRIMARIA' | 'SECUNDARIA';

export type Division = {
  id: number;
  name: string;
  level: DivisionLevel;
};

export type Student = {
  id: number;
  name: string;
  lastName: string;
  divisionId: number;
  divisionName?: string;
};

export type Post = {
  id: number;
  title: string;
  content: string;
  createdAt: string;
};

export type DashboardSummary = {
  totalUsers: number;
  totalStudents: number;
  totalDivisions: number;
  totalPosts: number;
};
