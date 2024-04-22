import React, { FC } from "react";
import "./App.css";
import ProductList from "./ProductList";

export interface ProductType {
  id: number;
  name: string;
  category: string;
}
const App: FC = () => {
  const products: ProductType[] = [
    { id: 1, name: "Proizvod 1", category: "A" },
    { id: 2, name: "Proizvod 2", category: "B" },
    { id: 3, name: "Proizvod 3", category: "A" },
  ];

  return (
    <div>
      <h1>Lista proizvoda</h1>
      <ProductList products={products} />
    </div>
  );
};

export default App;
