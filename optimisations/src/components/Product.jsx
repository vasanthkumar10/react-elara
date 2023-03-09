import React from "react";

export function Product({ products, setProducts }) {
  return (
    <div>
      <h2>Products - {products}</h2>
      <button onClick={(e) => setProducts(products + 1)}>Add to cart</button>
    </div>
  );
}
