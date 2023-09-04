import { React, useEffect, useState } from "react";
import "./App.css";

// The function that makes the fetch request to the Products API
import { getProducts } from "./services/getProducts";
import Products from "./components/Products";

function App() {
  // use the products variable to read all of your products
  // and display them on your page
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const products = await getProducts();
      setProducts(products);
    };

    loadData();
  }, []);

  return (
    <div className="container">
      <header className="container-header">
        <div className="text-layer" role="banner">
          <p>
            <em>Your top spot for all things basketball</em>
          </p>
          <h1>Hoops & Hops</h1>
        </div>
      </header>

      <main className="container-main">
        <Products products={products} />
      </main>
    </div>
  );
}

export default App;
