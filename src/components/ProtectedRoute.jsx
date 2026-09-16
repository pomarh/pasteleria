import { Navigate } from "react-router-dom";
import { useAuth } from "../hook/useAuth";

export default function ProtectedRoute({ children }) {
    const { session, loading } = useAuth();

    if (loading) return <p className="text-center py-20">Cargando...</p>;
    if (!session) return <Navigate to="/login" replace />;

    return children;
}
