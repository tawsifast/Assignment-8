"use client"
import { addToLocalDB, deleteFromLocalDB, getAllFromLocalDB, getAllProductFromLocalDB } from "@/utils/localDB";
import { createContext, useEffect, useState } from "react";

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
            alert("Select at least 1 itme");
            return;
        }
        const total = proObject.price * item;
        const productQuantity = {...proObject, item, total};
        addToLocalDB(productQuantity);

        const isExistBook = storedProduct.find((pro)=> pro.id == proObject.id);
        if(isExistBook){
         alert("The product already exist")
        }else  {

        console.log(proObject,storedProduct, "id");
        setStoredProduct([...storedProduct, productQuantity]);
        alert(`${proObject.name} is added`)
       }
      }

    const handleDelete = (id) => {
    deleteFromLocalDB(id);  // ✅ LocalDB থেকে সরাও
    const filteredProduct = storedProduct.filter((pro) => pro.id !== id);
    setStoredProduct(filteredProduct);  // ✅ UI থেকে সরাও
}

    return <productContext.Provider value={{storedProduct,setStoredProduct,handleCart, handleDelete}}>
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