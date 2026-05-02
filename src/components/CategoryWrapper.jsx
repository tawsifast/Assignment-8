"use client"
import { Button } from '@heroui/react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React from 'react';

const CategoryWrapper = ({categories}) => {
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get("category")
  return (
    <div>
        <div className="flex items-center gap-5 my-8">
   
        {categories.map((category) => {
          const isActive = activeCategory == category.category.toLowerCase();
          return(
            <Link key={category.id} href={`?category=${category.category.toLowerCase()}`}><Button variant="outline"
             className={isActive? "bg-pink-500 text-white":""}
            >{category.category}</Button></Link>
        )})}
      </div>
    </div>
  );
};

export default CategoryWrapper;