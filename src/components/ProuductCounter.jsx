import { useCart } from "../services/useCart";

function ProductCounter({ productObj }) {
  const { cart, dec, inc } = useCart()

  const index = cart.indexOf(productObj)

  return (
      <div>
        <button onClick={() => dec(index)}>-</button>
        <span>{productObj.count}</span>
        <button onClick={() => inc(index)}>+</button>
      </div>
  );
}

export default ProductCounter;
