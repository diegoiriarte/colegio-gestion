import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { authService } from '../api/services';

type AuthContextValue = {
  isAuthenticated: boolean;
  userName: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);
const STORAGE_KEY = 'colegio-auth';

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [token, setToken] = useState<string | null>(null);
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as { token: string; userName: string };
      setToken(parsed.token);
      setUserName(parsed.userName);
    }
  }, []);

  const value = useMemo<AuthContextValue>(
    () => ({
      isAuthenticated: Boolean(token),
      userName,
      login: async (email, password) => {
        const response = await authService.login({ email, password });
        setToken(response.token);
        setUserName(response.displayName);
        localStorage.setItem(STORAGE_KEY, JSON.stringify({ token: response.token, userName: response.displayName }));
      },
      logout: () => {
        setToken(null);
        setUserName(null);
        localStorage.removeItem(STORAGE_KEY);
      },
    }),
    [token, userName],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe utilizarse dentro de AuthProvider');
  }
  return context;
}
