import { api } from "./api";

export const auth = (email, password) =>
  api.post("/auth/login", { "email": email, "password": password });