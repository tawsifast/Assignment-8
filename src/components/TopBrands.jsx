import { Card } from "@heroui/react";
import Image from "next/image";
import React from "react";

const TopBrands = () => {
  const brands = [
    {
      id: 1,
      name: "SunShade",
      image: "https://cdn.dribbble.com/userupload/18122564/file/still-d551d098304672098335706a82934d3f.png?resize=640x480&vertical=center",
    },
    {
      id: 2,
      name: "CoolStep",
      image: "https://cdn.dribbble.com/userupload/46473159/file/e840c9a5118a4c81083f19d2457dcb2c.png?format=webp&resize=640x480&vertical=center",
    },
    {
      id: 3,
      name: "SunnyWear",
      image: "https://cdn.dribbble.com/userupload/47237169/file/6931cddfe6cf456f990bd55d92c01c18.jpg?format=webp&resize=640x480&vertical=center",
    },
    {
      id: 4,
      name: "H&HydroGo",
      image: "https://cdn.dribbble.com/userupload/42799668/file/original-f7cd26c200f5d81f6824b05ee066b8f1.jpg?format=webp&resize=640x480&vertical=center",
    },
  ];
  return (
    <div>
      <div className="w-11/12 mx-auto my-16">
        <h2 className="text-3xl font-bold text-center mb-10">Top Brands</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {brands.map((brand) => (
            <Card
              key={brand.id}
              className="flex items-center justify-center p-6 hover:shadow-lg transition"
            >
              <div className="relative aspect-square z-10">
                <Image
                  src={brand.image}
                  alt={brand.name}
                  width={300}
                  height={100}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover rounded-xl z-11"
                />
                <h2 className="text-center font-semibold text-xl mt-5">{brand.name}</h2>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopBrands;
