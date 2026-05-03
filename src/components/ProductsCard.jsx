import { Button, Card, Chip } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiStar } from 'react-icons/ci';
import { FaArrowRight, FaHeart, FaStar } from 'react-icons/fa';
import { RiAtFill } from 'react-icons/ri';

const ProductsCard = ({product}) => {
    console.log(product);
    return (
        <div>
          <Card className="bg-slate-50 border border-slate-200 hover:scale-105 transition-all duration-300">
        <div className="relative aspect-square z-10">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover rounded-xl z-11"
          />
          <Chip size="sm" className="absolute z-12  top-2 right-2 bg-[#1A1A2E] text-white">{product.category}</Chip>
        </div>
        <div>
          <h2 className='text-xl font-medium text-[#1A1A2E]'>{product.name}</h2>
        </div>
        <div className="flex items-center justify-between font-semibold">
            <p className="flex items-center gap-2 text-lg text-[#1A1A2E]"><FaStar className='text-yellow-400' />{product.rating}</p>
            <p className="flex items-center gap-2 text-lg text-[#1A1A2E]">${product.price}</p>
        </div>
        <Link href={`product/${product.id}`}>
        <Button variant="outline" className={"w-full bg-[#1A1A2E] text-white hover:bg-[#0F3460]"}>View Details <FaArrowRight /></Button>
        </Link>
    </Card>
        </div>
    );
};

export default ProductsCard;