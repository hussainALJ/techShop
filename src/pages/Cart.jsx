import { useCart } from "../services/useCart";

function Cart() {
  const { cart, removeItem } = useCart();

  return (
    <div>
      {cart.map((product) => (
        <div key={product}>
          <h1>{product}</h1>
          <button onClick={() => removeItem(product)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default Cart
