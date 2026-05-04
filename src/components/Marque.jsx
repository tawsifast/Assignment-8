import React from 'react';
import Marquee from 'react-fast-marquee';
import { getProduct } from './data';
import { Button } from '@heroui/react';

const Marque = async () => {
    const products = await getProduct();
    return (
        <div className='flex justify-between items-center gap-4 p-2 bg-gray-300'>
            <Button className={"rounded-sm"}>Brands</Button>
            <Marquee>
              {
                products.map((product)=>
                <span key={product.id} className='mx-20'>{product.brand}</span>)
              }
            </Marquee>
        </div>
    );
};

export default Marque;