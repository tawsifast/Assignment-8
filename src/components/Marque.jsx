import React from 'react';
import Marquee from 'react-fast-marquee';
import { getProduct } from './data';
import { Button } from '@heroui/react';

const Marque = async () => {
    const products = await getProduct();
    return (
        <div className='flex justify-between bg-gray-300 items-center gap-4 p-2 '>
            <Button className={"rounded-sm bg-[#1A1A2E]/90 text-white"}>Brands</Button>
            <Marquee pauseOnHover={true}>
              {
                products.map((product)=>
                <span key={product.id} className='mx-20'>{product.brand}</span>)
              }
            </Marquee>
        </div>
    );
};

export default Marque;