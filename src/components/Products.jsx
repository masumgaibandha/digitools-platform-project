import React, { use } from "react";
import ProductCard from "./ProductCard";

const Products = ({ fetchPromise }) => {
  const productsData = use(fetchPromise);
  return (
    <div className="py-20 w-7xl mx-auto">
      <div className="text-center space-y-3">
        <h1 className="text-5xl font-extrabold"> Digital Tools</h1>
        <p className="text-[#627382]">
          Choose from our curated collection of premium digital products
          designed to boost your productivity and creativity.
        </p>
      </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 py-10">
            {
                productsData.map(product=><ProductCard key={product.id} product={product}></ProductCard>)
            }
        </div>
    </div>
  );
};

export default Products;
