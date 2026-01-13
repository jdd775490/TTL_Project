import { USER } from "./authData";

export const login = (email, password) => {
  if (email === USER.email && password === USER.password) {
    localStorage.setItem("auth", "true");
    return true;
  }
  return false;
};

export const logout = () => {
  localStorage.removeItem("auth");
};

export const isAuth = () => {
  return localStorage.getItem("auth") === "true";
};