function SearchBar({ search }) {
  return (
    <div className=" border-2 border-gray-600 border-solid rounded-xl p-2 md:w-100 ">
      <input
        className=" outline-0 w-full "
        type="text"
        placeholder="Search..."
        onChange={(e) => {
          search(e.target.value);
        }}
      />
    </div>
  );
}

export default SearchBar;
