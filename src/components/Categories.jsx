import { fetchCategories } from "../api/categoriesApi";
import { useFetch } from "../api/useFetch";

export const Categories = () => {
  const { data, isLoading, error } = useFetch(fetchCategories);

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <ul className=" list-disc pl-7">
          {data.map((category) => {
            return (
              <li key={category.id} className=" mb-2">
                {category.name}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
