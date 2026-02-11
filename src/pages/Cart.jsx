import { useState } from "react";
import ProductCard from "../components/ProductCard";
import { useCart } from "../services/useCart";
import ProductCounter from "../components/ProuductCounter";

function Cart() {
  const { cart, removeItem, inc, dec } = useCart();
  let total = 0;

  return (
    <>
      <div className=" max-w-350 mx-auto mt-15 px-10 ">
        {cart.map((product, index) => (
          <div key={product.id} className=" mb-4 ">
            <button onClick={() => {
              product.count = null
              removeItem(product.id)
              }}>Remove</button>
            <ProductCard key={product.id} productObj={product} inCart="true" />
            <ProductCounter productObj={product}/>
          </div>
        ))}
        <div className=" max-w-100 mx-auto border border-gray-500 rounded-xl p-6 ">
          {cart.map((product) => {
            total += product.price * product.count;
            return (
              <div key={product.id} className=" flex justify-between my-2 ">
                <p>{product.title} x{product.count}</p>
                <span>{product.price * product.count}$</span>
              </div>
            );
          })}
          <div className=" flex justify-between border-t border-gray-500 ">
            <p>Total</p>
            <span>{total}$</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
