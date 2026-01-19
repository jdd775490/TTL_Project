
import { USER, ADMIN } from "./authData";

export const login = (email, password) => {
  if (email === USER.email && password === USER.password) {
    localStorage.setItem("auth", "true");
    localStorage.setItem("role", "user");
    return true;
  }
  if (email === ADMIN.email && password === ADMIN.password) {
    localStorage.setItem("auth", "true");
    localStorage.setItem("role", "admin");
    return true;
  }
  return false;
};


export const logout = () => {
  localStorage.removeItem("auth");
  localStorage.removeItem("role");
};


export const isAuth = () => {
  return localStorage.getItem("auth") === "true";
};


export const isAdmin = () => {
  return isAuth() && localStorage.getItem("role") === "admin";
};

export const isUser = () => {
  return isAuth() && localStorage.getItem("role") === "user";
};
