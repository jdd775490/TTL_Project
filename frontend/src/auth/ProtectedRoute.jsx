import { Navigate } from "react-router-dom";
import { isAuth } from "./auth";

export default function ProtectedRoute({ children }) {
  return isAuth() ? children : <Navigate to="/login" replace />;
}