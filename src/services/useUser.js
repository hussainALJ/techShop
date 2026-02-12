import { create } from "zustand";

export const useUser = create((set) => ({
  user: null,
  Token: JSON.parse(localStorage.getItem("token")) || null,
  setToken: (token) => {
    localStorage.setItem("token", JSON.stringify(token))
    set({Token: token})
  },
  setUser: (data) => set({user: data})
}))