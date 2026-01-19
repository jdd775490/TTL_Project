import { Navigate } from "react-router-dom";
import { isAuth, isAdmin } from "./auth";  

export const ProtectedRoute = ({ children }) => {
  return isAuth() ? children : <Navigate to="/login" />;
};

export const AdminRoute = ({ children }) => {
  return isAdmin() ? children : <Navigate to="/unauthorized" />;
};
