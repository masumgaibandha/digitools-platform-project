import React, { use} from "react";
import ProductCard from "./ProductCard";

const Products = ({ fetchPromise, carts, setCarts }) => {
  const productsData = use(fetchPromise);
  
  return (
    <div className="py-5 md:w-7xl md:mx-auto px-6">
      

      

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 py-5">
        {productsData.map((product) => (
          <ProductCard carts={carts} setCarts={setCarts} key={product.id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Products;
