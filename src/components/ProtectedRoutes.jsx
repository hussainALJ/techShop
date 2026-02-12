import { Navigate, Outlet } from "react-router-dom";
import { useFetch } from "../api/useFetch";
import { profile } from "../api/userApi";

function ProtectedRoutes() {
  const { data, isLoading, error } = useFetch(profile);
  if (!data) {
    if (!isLoading) {
      return <Navigate to="/login" replace />;
    }
  }

  return <Outlet />;
}

export default ProtectedRoutes;
