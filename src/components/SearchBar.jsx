function SearchBar({ search }) {
  return (
    <div>
      <input
        className=" bg-amber-950"
        type="text"
        onChange={(e) => {
          search(e.target.value);
        }}
      />
    </div>
  );
}

export default SearchBar;
