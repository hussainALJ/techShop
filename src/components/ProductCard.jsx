import { Link } from "react-router-dom";
import { useCart } from "../services/useCart";
import ProductCounter from "./ProuductCounter";

function ProductCard({ productObj, inCart = false }) {
  const { cart, addToCart } = useCart();

  cart.map((product) => {
    if (product.id === productObj.id) return productObj = product
  })

  if (inCart)
    return (
      <div className=" flex justify-between items-start h-25 rounded-xl overflow-hidden ">
        <img
          className=" object-cover h-full "
          src={productObj.images[0]}
          alt={productObj.title}
        />
        <div className=" border border-gray-500 rounded-r-xl h-full flex ">
          <div>
            <Link to={`/product/${productObj.id}`}>
              <h3 className=" text-xl line-clamp-1 ">{productObj.title}</h3>
            </Link>
            <p className=" text-sm my-1 line-clamp-3 ">
              {productObj.description}
            </p>
          </div>
          <span className=" text-xl font-bold ">{productObj.price}$</span>
        </div>
      </div>
    );

  return (
    <div className=" w-full md:max-w-100 h-115 shrink-0 overflow-y-hidden rounded-xl ">
      <img
        className=" object-cover h-55 w-full "
        src={productObj.images[0]}
        alt={productObj.title}
      />
      <div className=" p-3 border border-t-0 border-gray-600 border-solid rounded-b-xl ">
        <Link to={`/product/${productObj.id}`}>
          <h3 className=" text-xl line-clamp-1 ">{productObj.title}</h3>
        </Link>
        <p className=" text-sm my-6 h-25 line-clamp-5 ">
          {productObj.description}
        </p>
        <div className=" flex justify-between ">
          <span className=" text-xl font-bold ">{productObj.price}$</span>
          {productObj.count ? (
            <ProductCounter productObj={productObj} />
          ) : (
            <button
              onClick={() => {
                addToCart(productObj);
                productObj.count = 1;
              }}
              className=" bg-blue-600 text-white p-2 rounded-md text-sm font-semibold "
            >
              Add to cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
