import React, { FC } from "react";
import { ProductType } from "./App";

interface ProductProps {
  product: ProductType;
}

const Product: FC<ProductProps> = ({ product }) => {
  return (
    <div className="product">
      <h3>{product.name}</h3>
      <p>Category: {product.category}</p>
    </div>
  );
};

export default Product;
