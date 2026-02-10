import { fetchCategories } from "../api/categoriesApi";
import { useFetch } from "../api/useFetch";
import CategoryCard from "./CategoryCard";

export const Categories = ({limit = null, mini}) => {
  const { data, isLoading, error } = useFetch(fetchCategories);

  if (limit)
    if (!isLoading && data.length > limit) data.length = limit;

  if (mini)
    if (!isLoading) return data.map((category) => <p className=" my-3 pl-2 text-lg bg-linear-to-r from-blue-100 to-transparent ">{category.name}</p>);

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
