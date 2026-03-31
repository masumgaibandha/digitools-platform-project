import React, { use, useState } from "react";
import ProductCard from "./ProductCard";

const Products = ({ fetchPromise, carts, setCarts }) => {
  const productsData = use(fetchPromise);
  
  return (
    <div className="py-5 w-7xl mx-auto">
      

      

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 py-5">
        {productsData.map((product) => (
          <ProductCard carts={carts} setCarts={setCarts} key={product.id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Products;
