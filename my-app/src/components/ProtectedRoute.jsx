import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  //const token = localStorage.getItem("token"); // Verifica si hay un token
  const token =true
  // Si no hay token, redirige al login
  if (!token) {
    return <Navigate to="/" />;
  }

  // Si hay token, muestra el contenido protegido
  return children;
};

export default ProtectedRoute;
