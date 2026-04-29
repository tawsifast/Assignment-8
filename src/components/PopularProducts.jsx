import React from "react";
import { getProduct } from "./data";
import ProductsCard from "./ProductsCard";

const PopularProducts = async () => {
  const products = await getProduct();
  const popularProducts = products.slice(0, 3);

  return (
    <div className="w-11/12 mx-auto">
      <div className="grid grid-cols-3 gap-5 my-10">
        {popularProducts.map((product) => (
          <ProductsCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
