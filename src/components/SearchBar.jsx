import { useRef } from "react";

function SearchBar({ search }) {
  const timeoutRef = useRef(null);

  const handleChange = (e) => {
    const value = e.target.value;

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      search(value);
    }, 1000);
  };
  return (
    <div className=" border-2 border-gray-600 border-solid rounded-xl p-2 md:w-100 ">
      <input
        className=" outline-0 w-full "
        type="text"
        placeholder="Search..."
        onChange={(e) => {
          handleChange(e)
        }}
      />
    </div>
  );
}

export default SearchBar;
