import { Link } from "react-router-dom";
import { useCart } from "../services/useCart";

function ProductCard({ productObj }) {
  const { addToCart } = useCart();

  return (
    <div className=" w-full md:max-w-100 h-112 shrink-0 overflow-y-hidden rounded-xl ">
      <img
        className=" object-cover h-55 w-full "
        src={productObj.images[0]}
        alt={productObj.title}
      />
      <div className=" p-3">
        <Link to={`product/${productObj.id}`}>
          <h3 className=" text-xl line-clamp-1 ">{productObj.title}</h3>
        </Link>
        <p className=" text-sm my-6 h-25 line-clamp-5 ">
          {productObj.description}
        </p>
        <div className=" flex justify-between ">
          <span className=" text-xl font-bold ">{productObj.price}$</span>
          <button
            onClick={() => addToCart(productObj.title)}
            className=" bg-blue-600 text-white p-2 rounded-md text-sm font-semibold "
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
