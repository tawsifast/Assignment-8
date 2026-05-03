"use client";
import { productContext } from "@/context/ProductProvider";
import { useContext } from "react";
import Image from "next/image";
import { Button, Card } from "@heroui/react";
import { Delete } from "@gravity-ui/icons";
import { FiDelete } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { getAllProductFromLocalDB } from "@/utils/localDB";

const CartPage = () => {
  const { storedProduct, setStoredProduct,handleDelete, handleCheckOut } = useContext(productContext);
  console.log(storedProduct, "cart");

  let total = 0;
  storedProduct.forEach((product) => {
    total = total + product.total;
  });


  return (
    <div className="w-11/12 mx-auto my-10 grid grid-rows-1 md:grid-cols-5 justify-between gap-10 items-start">
     {storedProduct.length > 0 ? <div className="col-span-3">
        {storedProduct.map((item) => {
          return (
            <div key={item.id} className="">
              <Card className="border flex flex-row justify-between items-center col-span-3 mb-3">
                <div className="flex gap-4">
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
                    <p>${item.price}</p>
                   <Button onClick={()=>handleDelete(item.id)} variant="outline" size="sm" className={"text-red-400"}><RiDeleteBin6Line /></Button>
                  </div>
                </div>
                <div>
                  <p>${item.total}</p>
                </div>
              </Card>
            </div>
          );
        })}
      </div>: <div className="col-span-2 md:col-span-3">
        <h2 className="text-3xl md:text-4xl text-center text-purple-600">Please select an item first</h2>
        </div>}


      <div className="bg-white sticky top-20 border md:max-w-85  border-gray-200 col-span-3 md:col-span-2 rounded-xl p-5">
        <p className="text-xs font-medium text-gray-400  mb-4">ORDER SUMMARY</p>

        <div className="flex justify-between mb-2 self start">
          <span className="text-sm text-gray-500">
            Total ({storedProduct.length} items)
          </span>
          <span className="text-sm">${total}</span>
        </div>

        <div className="flex justify-between mb-2">
          <span className="text-sm text-gray-500">Delivery charge</span>
          <span className="text-sm text-green-600">Free</span>
        </div>

        <div className="border-t border-gray-100 pt-4 flex justify-between items-center mb-5">
          <span className="text-base font-medium">Total</span>
          <span className="text-2xl font-medium">${total}</span>
        </div>

        <Button onClick={handleCheckOut} className="w-full py-2.5 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700">
          Checkout
        </Button>
      </div>
    </div>
  );
};

export default CartPage;
