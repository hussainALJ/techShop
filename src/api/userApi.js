import { api } from "./api";

export const auth = (email, password) =>
  api.post("/auth/login", { email: email, password: password });

export const profile = () =>
  api.get("/auth/profile", {
    headers: {
      Authorization:
        `Bearer ${JSON.parse(localStorage.getItem("token")).access_token}`,
    },
  });
