import { fetchCategories } from "../api/categoriesApi";
import { useFetch } from "../api/useFetch";
import CategoryCard from "./CategoryCard";

export const Categories = ({limit = null, mini}) => {
  const { data, isLoading, error } = useFetch(fetchCategories);

  if (limit)
    if (!isLoading && data.length > limit) data.length = limit;

  if (mini)
    if (!isLoading) return data.map((category) => <div>{category.name}</div>);

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
