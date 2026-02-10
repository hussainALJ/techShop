import { api } from "./api";

export const fetchProducts = () => api.get("/products")
export const fetchProductById = (id) => api.get(`/products/${id}`)