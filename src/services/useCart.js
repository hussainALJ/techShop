import { create } from "zustand";

export const useCart = create((set) => ({
  cart: [],
  addToCart: (title) => set((state) => ({ cart: [...state.cart, title] })),
  removeItem: (title) =>
    set((state) => ({ cart: state.cart.filter((product) => (product === title? false: true)) })),
}));
