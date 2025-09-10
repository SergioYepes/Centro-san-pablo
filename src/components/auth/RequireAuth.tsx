import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/auth";

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  
  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">
      <div className="text-navy">Cargando...</div>
    </div>;
  }
  
  if (!user) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  return children;
};

export const RequireProfessor = ({ children }: { children: JSX.Element }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  
  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">
      <div className="text-navy">Cargando...</div>
    </div>;
  }
  
  if (!user) return <Navigate to="/" state={{ from: location }} replace />;
  if (user.role !== "profesor") return <Navigate to="/" replace />;
  return children;
};

export const RequireAdmin = ({ children }: { children: JSX.Element }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  
  // Mostrar loading mientras se carga la autenticación
  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">
      <div className="text-navy">Cargando...</div>
    </div>;
  }
  
  if (!user) return <Navigate to="/" state={{ from: location }} replace />;
  if (user.role !== "admin") {
    return <Navigate to="/" replace />;
  }
  return children;
};


