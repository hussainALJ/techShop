import { fetchProducts } from "../api/productsApi";
import { useFetch } from "../api/useFetch";
import ProductCard from "./ProductCard";

export const Products = ({ limit = null, fetch = fetchProducts, param = null }) => {
  const { data, isLoading, error } = useFetch(fetch, param);

  if (limit) if (!isLoading && data.length > limit) data.length = limit;

  return isLoading ? (
    <div>Loading...</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    data.map((card) => {
      return <ProductCard key={card.id} productObj={card} />;
    })
  );
};
