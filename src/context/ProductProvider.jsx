"use client"
import { addToLocalDB, getAllFromLocalDB, getAllProductFromLocalDB } from "@/utils/localDB";
import { createContext, useEffect, useState } from "react";

export const productContext = createContext();
const ProductProvider = ({children}) => {

    const [storedProduct, setStoredProduct] = useState([]);

    useEffect(()=>{
      const getProductFromDb =  getAllProductFromLocalDB();
      console.log(getProductFromDb,"getDB");
      setStoredProduct(getProductFromDb); 
    },[])

    const handleCart = (proObject) =>{

        addToLocalDB(proObject);
       console.log(proObject,storedProduct, "id");
       const isExistBook = storedProduct.find((pro)=> pro.id == proObject.id);
       if(isExistBook){
        alert("The product already exist")
       }else{
        setStoredProduct([...storedProduct, proObject]);
        alert(`${proObject.name} is added`)
       }
      }

    //   const handleCart = (proObject) => {
    // setStoredProduct((prev) => {
    //   const isExist = prev.find(
    //     (pro) => pro.id === proObject.id
    //   );

    //   if (isExist) {
    //     alert("Product already exists");
    //     return prev;
    //   }

    //   alert(`${proObject.name} added to cart`);
    //   return [...prev, proObject];
    // });
    //   }

    //   const data = {
    //     storedProduct,
    //     setStoredProduct,
    //     handleCart
    //   }

    return <productContext.Provider value={{storedProduct,setStoredProduct,handleCart}}>
        {children}
    </productContext.Provider>
};

export default ProductProvider;



// "use client"
// import { createContext, useState, useEffect } from "react";

// export const productContext = createContext();

// const ProductProvider = ({children}) => {
//     const [storedProduct, setStoredProduct] = useState([]);

//     useEffect(() => {
//         const stored = localStorage.getItem("cart");
//         if (stored) setStoredProduct(JSON.parse(stored));
//     }, []);

//     useEffect(() => {
//         localStorage.setItem("cart", JSON.stringify(storedProduct));
//     }, [storedProduct]);

//     const handleCart = (proObject) => {
//         const isExistBook = storedProduct.find((pro) => pro.id == proObject.id);
//         if (isExistBook) {
//             alert("Already exists");
//         } else {
//             setStoredProduct([...storedProduct, proObject]);
//             alert(`${proObject.name} is added`);
//         }
//     };

//     const data = {
//         storedProduct,
//         setStoredProduct,
//         handleCart 
//         };

//     return (
//         <productContext.Provider value={data}>
//             {children}
//         </productContext.Provider>
//     );
// };

// export default ProductProvider;