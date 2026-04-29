import { getProduct } from "@/components/data";
import ProductsCard from "@/components/ProductsCard";
import { Card } from "@heroui/react";
import Image from "next/image";

const ProductPage = async () => {
  const products = await getProduct();
  console.log(products, "pro");
  return (
    <div>
      <h2>All Products</h2>
      <div className="grid grid-cols-4 gap-5">
        {products.map((product) => (
          <ProductsCard key={product.id} product={product}></ProductsCard>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
