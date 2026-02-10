import { useState } from "react";
import { Products } from "../components/Products";
import SearchBar from "../components/SearchBar";
import { fetchProductsByTitle } from "../api/productsApi";
import { Categories } from "../components/Categories";

function Store() {
  const [search, setSearch] = useState("");

  return (
    <>
      <div className=" max-w-370 mx-auto mt-15 px-10 md:px-25 ">
        <SearchBar search={setSearch} />
        <div className=" mt-10 pt-5 pb-3 max-w-230 border border-gray-500 rounded-xl ">
          <h3 className=" text-xl ml-2 ">Categories:</h3>
          <div className=" max-h-90 overflow-auto ">
            <Categories mini="true" />
          </div>
        </div>
        <div className=" mt-10 ">
          <Products fetch={fetchProductsByTitle} param={search} />
        </div>
      </div>
    </>
  );
}

export default Store;
