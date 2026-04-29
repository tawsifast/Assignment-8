
export const getProduct = async () =>{
    const res = await fetch("https://assignment-8-mu-rust.vercel.app/data.json");
    return await res.json();
}