import { Categories } from "../components/Categories";
import { Products } from "../components/Products";

function Home() {
  return (
    <div className=" container m-auto px-5 max-w-270 ">
      <div className=" flex gap-4 w-full overflow-auto mt-30 ">
        <Products limit= '7'/>
      </div>
      <div className=" flex flex-col gap-4 w-full my-40">
        <Categories limit= '5'/>
      </div>
    </div>
  );
}

export default Home;
