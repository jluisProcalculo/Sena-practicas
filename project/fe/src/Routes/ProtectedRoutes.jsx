import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = ({ aoi, redirectPath = "/" }) => {
  /**
   * ProtectedRoutes - Si el aoi no existe, redirige a la ruta especificada (routes.explore)
   * para que se defina el AOI antes de continuar. Si se continua se puede redirigir a Commercial y Open
   */
  return aoi !== "" ? <Outlet /> : <Navigate to={redirectPath} />;
};

export default ProtectedRoutes;
