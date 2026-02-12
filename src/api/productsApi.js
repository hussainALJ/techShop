import { api } from "./api";

export const fetchProducts = () => api.get("/products")
export const fetchProductById = (id) => api.get(`/products/${id}`)
export const fetchProductsByTC = (filterArr) => api.get(`/products/?title=${filterArr[0]}&categoryId=${filterArr[1]}`)