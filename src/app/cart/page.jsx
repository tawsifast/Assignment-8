"use client";
import { productContext } from "@/context/ProductProvider";
import { useContext } from "react";
import Image from "next/image";

const CartPage = () => {
  const { storedProduct } = useContext(productContext);
//   console.log(storedProduct,"cart");

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">
        Cart ({storedProduct.length})
      </h2>

      {storedProduct.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        storedProduct.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 border p-4 mb-3 rounded-lg"
          >
            <Image
              src={item.image}
              alt={item.name}
              width={80}
              height={80}
              className="rounded object-cover"
            />

            <div>
              <h3 className="font-semibold">{item.name}</h3>
              <p>${item.price}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default CartPage;