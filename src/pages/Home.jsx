import { Categories } from "../components/Categories";
import { Products } from "../components/Products";

function Home() {
  return (
    <div className=" container m-auto px-5 max-w-270 ">
      <div className=" flex gap-4 w-full overflow-auto mt-25 ">
        <Products limit= '7'/>
      </div>
      <Categories />
    </div>
  );
}

export default Home;
