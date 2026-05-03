"use client"
import { addToLocalDB, deleteFromLocalDB, getAllFromLocalDB, getAllProductFromLocalDB } from "@/utils/localDB";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const productContext = createContext();
const ProductProvider = ({children}) => {
    

    const [storedProduct, setStoredProduct] = useState([]);

    useEffect(()=>{
      const getProductFromDb =  getAllProductFromLocalDB();
      console.log(getProductFromDb,"getDB");
      setStoredProduct(getProductFromDb); 
    },[])

    const handleCart = (proObject,item) =>{

        if(item == 0){
            toast.error("Select at least 1 itme");
            return;
        }
        const total = proObject.price * item;
        const productQuantity = {...proObject, item, total};
        addToLocalDB(productQuantity);

        const isExistBook = storedProduct.find((pro)=> pro.id == proObject.id);
        if(isExistBook){
         toast.warning("The product already exist")
        }else  {

        console.log(proObject,storedProduct, "id");
        setStoredProduct([...storedProduct, productQuantity]);
        toast.success(`${proObject.name} is added`)
       }
    }

    const handleCheckOut = () => {
    if (storedProduct.length > 0) {
    localStorage.removeItem("product"); // cart empty
    setStoredProduct([]); // UI update
    toast.success("Product purchased successfully");
     } else {
    toast.error("Please select an item first");
    }
    };
    const handleDelete = (id) => {
    deleteFromLocalDB(id); 
    const filteredProduct = storedProduct.filter((pro) => pro.id !== id);
    setStoredProduct(filteredProduct);  
    toast.success("Product removed")
    }

    return <productContext.Provider value={{storedProduct,setStoredProduct,handleCart, handleDelete, handleCheckOut}}>
        {children}
    </productContext.Provider>
};

export default ProductProvider;


