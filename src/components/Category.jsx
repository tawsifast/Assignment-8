
import { Button } from "@heroui/react";
import Link from "next/link";
import React from "react";
import CategoryWrapper from "./CategoryWrapper";
import { getCategories } from "./data";

const Category = async () => {
  const categories = await getCategories();
  console.log(categories);
  return (
    <div>

      <CategoryWrapper categories={categories}></CategoryWrapper>
      {/* <div className="flex items-center gap-5 my-8">
   
        {categories.map((category) => {
          return(
            <Link key={category.id} href={`?category=${category.category.toLowerCase()}`}><Button variant="outline"
            >{category.category}</Button></Link>
        )})}
      </div> */}
    </div>
  );
};

export default Category;
