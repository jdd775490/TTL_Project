// App.jsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import { Home } from "./pages/Home";
import Dashboard from "./pages/Dashboard";   // <-- use Dashboard as Admin panel
import Unauthorized from "./pages/Unauthorized";
import { ProtectedRoute, AdminRoute } from "./auth/ProtectedRoute";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Navigate to="/login" />} />

        
        <Route path="/login" element={<Login />} />

        
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <Dashboard />   
            </AdminRoute>
          }
        />

       
        <Route path="/unauthorized" element={<Unauthorized />} />
      </Routes>
    </BrowserRouter>
  );
}
