import { create } from "zustand";

export const useCart = create((set) => ({
  cart: [],
  addToCart: (product) => set((state) => ({ cart: [...state.cart, product] })),
  removeItem: (id) =>
    set((state) => ({
      cart: state.cart.filter((product) => (product.id === id ? false : true)),
    })),
  inc: (productIndex) =>
    set((state) => ({
      cart: state.cart.map((product, index) => {
        if (productIndex === index) product.count++;
        return product;
      }),
    })),
  dec: (productIndex) =>
    set((state) => ({
      cart: state.cart.map((product, index) => {
        if (productIndex === index && product.count > 1) {
          product.count--;
        }
        return product;
      }),
    })),
}));
