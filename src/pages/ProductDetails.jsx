import { useParams } from "react-router-dom";
import { fetchProductById } from "../api/productsApi";
import { useFetch } from "../api/useFetch";

function ProductDetails() {
  const { id } = useParams();
  const { data, isLoading, error } = useFetch(fetchProductById, id);

  return (
    <div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <h1>{data.title}</h1>
      )}
    </div>
  );
}

export default ProductDetails;
