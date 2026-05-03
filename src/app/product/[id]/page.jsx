import { getProduct } from "@/components/data";
import Quantity from "@/components/Quantity";
import { Avatar, Button, Card } from "@heroui/react";
import Image from "next/image";
import { BsCart2 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";

const ProductDetailsPage = async ({ params }) => {
  const { id } = await params;
  console.log(id, "id");
  const products = await getProduct();
  const product = products.find((p) => p.id == id);
  return (
    <div>
      <Card className="w-10/12 mx-auto border my-10">
        <div className="grid grid-rows-1 md:grid-cols-2 gap-10">
          <div className="flex items-center justify-center bg-gray-100 rounded-xl overflow-hidden h-105">
            <Image
              src={product.image}
              alt={product.name}
              width={450}
              height={450}
              className="object-contain  rounded-2xlmax-h-[90%]"
            />
          </div>
          <div className="md:text-left text-center">
            <div className="space-y-2 md:space-y-3">
              <h2 className="font-bold text-3xl md:text-4xl">{product.name}</h2>
              <p className="text-gray-500 text-lg">{product.brand}</p>
              <h3 className="text-red-600 text-2xl">${product.price}</h3>
              <p className="font-semibold text-lg">Description</p>
              <p >{product.description}</p>
            </div>
            <Card className="border mt-3">
              <p>Quantity</p>
              <Quantity product={product}/>
            </Card>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProductDetailsPage;
