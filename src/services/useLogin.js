import { create } from "zustand";

export const useLogin = create((set) => ({
  email: "",
  password: "",
  login: (email, password) => set(() => ({email: email, password: password}))
}));
