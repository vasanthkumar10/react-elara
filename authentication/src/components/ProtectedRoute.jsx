import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  console.log("user---", user);

  if (!user) return <Navigate to="/login" />;
  return children;
};
