import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../auth/auth";
import "./login.css";
import logo from "../assets/logo.png";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("admin");
  const nav = useNavigate();

  const handleLogin = () => {
    if (login(email, password)) nav("/dashboard");
    else alert("Invalid credentials");
  };

  return (
    <div className="login-container">
      <img src={logo} className="login-logo" />

      <div className="login-box">
        <h2>Login</h2>

        <div className="role-toggle">
          <button
            className={role === "admin" ? "active" : ""}
            onClick={() => setRole("admin")}
          >
            Admin
          </button>
          <button
            className={role === "user" ? "active" : ""}
            onClick={() => setRole("user")}
          >
            User
          </button>
        </div>

        <input
          placeholder="Email"
          onChange={e => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={e => setPassword(e.target.value)}
        />

        <button className="login-btn" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}