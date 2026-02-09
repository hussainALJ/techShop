import { Categories } from "../components/Categories";
import { Products } from "../components/Products";

function Home() {
  return (
    <div className=" flex items-baseline">
      <Products limit= '5'/>
      <Categories />
    </div>
  );
}

export default Home;
