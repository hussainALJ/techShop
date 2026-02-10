import { fetchCategories } from "../api/categoriesApi";
import { useFetch } from "../api/useFetch";
import CategoryCard from "./CategoryCard";

export const Categories = (limit = null) => {
  const { data, isLoading, error } = useFetch(fetchCategories);

  if (limit)
    if (!isLoading && data.length > limit.limit) data.length = limit.limit;

  return isLoading ? (
    <div>Loading...</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    data.map((category) => {
      return <CategoryCard key={category.id} categoryObj={category} />;
    })
  );
};
