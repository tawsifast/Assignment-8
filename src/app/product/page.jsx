import Category from "@/components/Category";
import { getProduct } from "@/components/data";
import ProductsCard from "@/components/ProductsCard";
import { Card } from "@heroui/react";
import Image from "next/image";

const ProductPage = async ({searchParams}) => {
  const {category} = await searchParams;
  console.log(category,"category");
  const products = await getProduct();

  const filteredProduct = category ? products.filter((product)=> product.category.toLowerCase() == category.toLowerCase()) : products;
  // console.log(products, "pro");
  return (
    <div className="w-11/12 mx-auto">
      <h2 className="font-bold text-center text-3xl my-8">All Products</h2>
      <Category/>
      <div className="grid grid-cols-4 gap-5">
        {filteredProduct.map((product) => (
          <ProductsCard key={product.id} product={product}></ProductsCard>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
