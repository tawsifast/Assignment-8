import { Button, Card, Chip } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaHeart } from 'react-icons/fa';

const ProductsCard = ({product}) => {
    console.log(product);
    return (
        <div>
          <Card className="border">
        <div className="relative aspect-square">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover rounded-xl"
          />
          <Chip size="sm" className="absolute top-2 right-2">{product.category}</Chip>
        </div>
        <div>
          <h2>{product.name}</h2>
        </div>
        <div className="flex items-center justify-between font-semibold">
            <p className="flex items-center gap-2 text-lg"><FaHeart />{product.rating}</p>
            <p className="flex items-center gap-2 text-lg">${product.price}</p>
        </div>
        <Link href={`product/${product.id}`}>
        <Button variant="outline" className={"w-full"}>View Details</Button>
        </Link>
    </Card>
        </div>
    );
};

export default ProductsCard;