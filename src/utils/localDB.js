
const getAllProductFromLocalDB = () =>{
    const allCartItem = localStorage.getItem("product");
    console.log(allCartItem,"localDB");
    if(allCartItem) return JSON.parse(allCartItem);

    return[];
    
}
const addToLocalDB = (product) =>{
    const allProducts = getAllProductFromLocalDB();
    const isAlreadyExist = allProducts.find((bk)=> bk.id == product.id);
    if(!isAlreadyExist){

        allProducts.push(product);
        localStorage.setItem("product", JSON.stringify(allProducts))
    }

}

export  const  deleteFromLocalDB = (id) =>{
    const products = getAllProductFromLocalDB();
    const filteredProduct = products.filter((pro)=> pro.id !== id);
    localStorage.setItem("product", JSON.stringify(filteredProduct))
  }
export {getAllProductFromLocalDB,addToLocalDB}