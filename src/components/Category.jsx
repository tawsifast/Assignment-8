import { Button } from "@heroui/react";
import Link from "next/link";
import React from "react";

const Category = async () => {
  const res = await fetch("https://assignment-8-mu-rust.vercel.app/category.json");
  const categories = await res.json();
  console.log(categories);
  return (
    <div>
      <div className="flex items-center gap-5 my-8">
        {categories.map((category) => (
            <Link key={category.id} href={`?category=${category.category.toLowerCase()}`}><Button>{category.category}</Button></Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
