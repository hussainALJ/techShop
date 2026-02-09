import { Categories } from "../components/Categories";
import { Products } from "../components/Products";

function Home() {
  return (
    <div className=" flex items-baseline">
      <Products />
      <Categories />
    </div>
  );
}

export default Home;
