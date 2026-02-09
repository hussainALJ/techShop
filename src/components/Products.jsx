import { fetchProducts } from "../api/productsApi";
import { useFetch } from "../api/useFetch";

export const Products = () => {
  const { data, isLoading, error } = useFetch(fetchProducts);

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <ul className=" list-disc pl-7">
          {data.map((card) => {
            return <li key={card.id} className=" mb-2">{card.title}</li>;
          })}
        </ul>
      )}
    </div>
  );
};
