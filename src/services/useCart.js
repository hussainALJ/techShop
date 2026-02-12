import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export const useCart = create(
  persist(
    (set) => ({
      cart: [],

      addToCart: (product) =>
        set((state) => ({
          cart: [...state.cart, { ...product, count: 1 }],
        })),

      removeItem: (id) =>
        set((state) => ({
          cart: state.cart.filter((product) => product.id !== id),
        })),

      inc: (productIndex) =>
        set((state) => ({
          cart: state.cart.map((product, index) =>
            index === productIndex
              ? { ...product, count: product.count + 1 }
              : product,
          ),
        })),

      dec: (productIndex) =>
        set((state) => ({
          cart: state.cart.map((product, index) =>
            index === productIndex && product.count > 1
              ? { ...product, count: product.count - 1 }
              : product,
          ),
        })),
    }),
    {
      name: "shopping-cart",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
