import { fetchProducts } from "../api/productsApi";
import { useFetch } from "../api/useFetch";
import ProductCard from "./ProductCard";

export const Products = (limit = null) => {
  const { data, isLoading, error } = useFetch(fetchProducts);

  if (limit)
    if (!isLoading && data.length > limit.limit) data.length = limit.limit;

  return (
    isLoading ? (
      <div>Loading...</div>
    ) : error ? (
      <div>{error}</div>
    ) : (
      data.map((card) => {
        return (
          <ProductCard key={card.id} productObj={card}/>
        );
      })
    )
  );
};
