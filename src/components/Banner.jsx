import { Button } from "@heroui/react";
import Link from "next/link";
import banner from "../../public/bannerImg-removebg-preview.png";
import Image from "next/image";


// bg-[url('https://t4.ftcdn.net/jpg/10/40/57/73/240_F_1040577301_4Sx67zLL26Pijedg2BkrboGEeedibo6U.jpg')]
const Banner = () => {
  return (
   
    <div className="h-[70vh] bg-[#1A1A2E]/90 w-full flex justify-between items-center rounded-lg shadow-2xl"
>
  {/* Overlay */}
  <div className="w-11/12 mx-auto h-full rounded-lg  flex items-center ">
    <div className=" mx-auto animate__animated animate__bounceInLeft px-6 text-white">
      <h1 className="text-3xl  md:text-4xl font-bold mb-4 max-w-2xl">
       Discover Your Perfect <br /> Summer Style
      </h1>

      <p className="text-lg md:text-xl mb-6 max-w-xl text-gray-200">
       Beat the Heat with Our Summer Collection
      </p>

      <div className="flex gap-4">
        <Link href="#">
          <Button className="bg-linear-to-r from-[#C45D00] via-[#ED7100] to-[#FFB16A]">
            Check now</Button></Link>
        <Link href="/pricing"><Button variant="outline" className="text-white border-white">View Pricing</Button></Link>
      </div>
    </div>
     <div className="animate__animated animate__slow  animate__pulse animate__infinite">
    <Image src={banner}
    alt="50% off"
    width={500}
    height={500}
    />
  </div>
  </div>

 
</div>
  );
};

export default Banner;