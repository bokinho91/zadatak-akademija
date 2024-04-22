import React, { FC } from "react";
import Product from "./Product";
import { ProductType } from "./App";

interface ProductListProps {
  products: ProductType[];
}

const ProductList: FC<ProductListProps> = ({ products }) => {
  return (
    <div className="list">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
