import { Button } from "@heroui/react";
import Link from "next/link";
import banner from "../../public/banner.jpg";

const Banner = () => {
  return (
   
    <div className="bg-[url('https://t4.ftcdn.net/jpg/10/40/57/73/240_F_1040577301_4Sx67zLL26Pijedg2BkrboGEeedibo6U.jpg')] h-[70vh] w-full bg-cover bg-no-repeat bg-center overflow-hidden bg-black/50 flex rounded-lg shadow-2xl"
>
  {/* Overlay */}
  <div className="w-full h-full rounded-lg bg-black/40 flex items-center ">
    <div className="w-10/12 mx-auto px-6 text-white">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 max-w-2xl">
       Discover Your Perfect <br /> Summer Style
      </h1>

      <p className="text-lg md:text-xl mb-6 max-w-xl text-gray-200">
       Beat the Heat with Our Summer Collection
      </p>

      <div className="flex gap-4">
        <Link href="#">
          <Button className="bg-linear-to-r from-[#C45D00] via-[#ED7100] to-[#FFB16A]">
            Check now
          </Button>
        </Link>

        <Link href="/pricing">
          <Button
            variant="outline"
            className="text-white border-white"
          >
            View Pricing
          </Button>
        </Link>
      </div>
    </div>
  </div>
    </div>
  );
};

export default Banner;