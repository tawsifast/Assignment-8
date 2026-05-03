import { Card } from '@heroui/react';
import Image from 'next/image';
import React from 'react';

const TopBrands = () => {
    const brands = [
  {
    id: 1,
    name: "SunShade",
    image: "/brands/SunShade.png",
  },
  {
    id: 2,
    name: "CoolStep",
    image: "/brands/adidas.png",
  },
  {
    id: 3,
    name: "SunnyWear",
    image: "/brands/zara.png",
  },
  {
    id: 4,
    name: "H&HydroGo",
    image: "/brands/hm.png",
  },
];
    return (
        <div>
            <div className="w-11/12 mx-auto my-16">
      <h2 className="text-3xl font-bold text-center mb-10">
        Top Brands
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {brands.map((brand) => (
          <Card
            key={brand.id}
            className="flex items-center justify-center p-6 hover:shadow-lg transition"
          >
            <Image
              src={brand.image}
              alt={brand.name}
              width={100}
              height={50}
              className="object-contain"
            />
          </Card>
        ))}
      </div>
    </div>
        </div>
    );
};

export default TopBrands;