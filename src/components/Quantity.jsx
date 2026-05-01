"use client";
import { Button } from "@heroui/react";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { BsCart2 } from "react-icons/bs";
import { FaMinus, FaPlus, FaRegHeart } from "react-icons/fa";
import { getProduct } from "./data";
import { productContext } from "@/context/ProductProvider";

const Quantity = ({product}) => {

  const [item, setItem] = useState(0);

 const {handleCart} = useContext(productContext);
//  console.log(handleCart,storedProduct,"context" );

  // console.log(product,"prprpr");

  const increaseItem = () => {
    const updateItem = item + 1;
    setItem(updateItem);
  };
  const decreaseItem = () => {
    if (item > 0) {
      setItem(item - 1);
    }
  };

  
  return (
    <div className="">
      <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden w-full">
        <Button onClick={decreaseItem} variant="outline"  className="min-w-0 w-10 h-10 border-none rounded-none hover:bg-gray-100"><FaMinus />
        </Button>
        <span className="flex-1 text-center text-md font-medium">{item}</span>
        <Button onClick={increaseItem} variant="outline" className="min-w-0 w-10 h-10 border-none rounded-none hover:bg-gray-100"><FaPlus/>
        </Button>
      </div>
        <Button className={"bg-green-600 w-full my-3"}>Buy Now</Button>

        <div className="grid grid-cols-2 gap-5">
        <Button onClick={()=> handleCart(product)} variant="outline" className={"w-full border border-green-500 text-green-500"}><BsCart2 />Add to cart</Button>

        <Button variant="outline" className={"w-full border border-green-500 text-green-500"}><FaRegHeart />Wishlist</Button>
        </div>
    </div>
  );
};

export default Quantity;
