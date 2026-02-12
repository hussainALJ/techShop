import { fetchCategories } from "../api/categoriesApi";
import { useFetch } from "../api/useFetch";
import CategoryCard from "./CategoryCard";

export const Categories = ({ limit = null, mini, setCategory, categoryId }) => {
  const { data, isLoading, error } = useFetch(fetchCategories);

  if (limit) if (!isLoading && data.length > limit) data.length = limit;

  if (mini)
    if (!isLoading)
      return data.map((category) => (
        <p
        key={category.id}
        className={` my-3 pl-2 text-lg bg-linear-to-r from-blue-100 ${category.id === categoryId && `from-red-100 pl-4`} to-transparent  cursor-pointer `}
        onClick={() => {
          if (category.id === categoryId) {
            setCategory("")
          } else {
            setCategory(category.id)
          }
        }}
        >
          {category.name}
        </p>
      ));

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
