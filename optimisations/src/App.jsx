// import { Parent } from "./components/Parent";
import React, { useState } from "react";
// import { Product } from "./components/Product";
// import { Cart } from "./components/Cart";
import { Form } from "./components/Form";

function App() {
  // const [products, setProducts] = useState(0);

  return (
    <div className="App">
      <Form />
      {/* <Parent /> */}
      {/* <Product products={products} setProducts={setProducts} />
      <Cart products={products} /> */}
    </div>
  );
}

export default App;
