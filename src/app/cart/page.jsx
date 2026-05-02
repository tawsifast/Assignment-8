"use client";
import { productContext } from "@/context/ProductProvider";
import { useContext } from "react";
import Image from "next/image";
import { Card } from "@heroui/react";

const CartPage = () => {
  const { storedProduct } = useContext(productContext);
  console.log(storedProduct, "cart");

  return (
    <div className="w-11/12 mx-auto bg-purple-200">
      <h2>{storedProduct.length}</h2>
      <div>
        {storedProduct.map((item) => {
          return (
            <div key={item.id} className="grid grid-cols-5">
              <Card className="border flex flex-row items-center col-span-3 mb-3">
                <div className="w-15 h-15 overflow-hidden rounded-xl">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h2>{item.name}</h2>
                  {/* <p>{item.brand}</p> */}
                  <p>${item.price}</p>
                </div>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CartPage;
