import { Card } from '@heroui/react';
import Image from 'next/image';
import React from 'react';

const ProductsCard = ({product}) => {
    console.log(product);
    return (
        <div>
            <Card>
                <div>
                    <Image src={product.image} alt={product.name} width={200} height={200}></Image>
                </div>
            </Card>
        </div>
    );
};

export default ProductsCard;