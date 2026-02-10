import { Link } from "react-router-dom";
import { fetchProducts } from "../api/productsApi";
import { useFetch } from "../api/useFetch";
import { useCart } from "../services/useCart";
import { useEffect } from "react";

export const Products = (limit = null) => {
  const { data, isLoading, error } = useFetch(fetchProducts);
  const { addToCart } = useCart();

  if (limit)
    if (!isLoading && data.length > limit.limit) data.length = limit.limit;

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <ul className=" list-disc pl-7">
          {data.map((card) => {
            return (
              <li key={card.id} className=" mb-2">
                <Link to={`/product/${card.id}`}>{card.title}</Link>
                <button
                  onClick={() => {
                    addToCart(card.title);
                  }}
                >
                  Add to cart
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
