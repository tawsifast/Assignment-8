import { Button } from "@heroui/react";
import Link from "next/link";

const Banner = () => {
  return (
    // <div className="bg-[url('https://cdn.dribbble.com/userupload/37890703/file/original-e6cc69dfa7fe953dfd7e3b2e63d9f13c.png?resize=2048x1717&vertical=center')] h-[80vh] w-full bg-cover bg-no-repeat bg-center flex items-center rounded-lg shadow-2xl">
    //   {/* Overlay */}
    //   <div className="w-full h-full rounded-lg bg-black/50 flex items-center ">
    //     <div className="max-w-7xl mx-auto px-6 text-white">
    //       <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-2xl">
    //         Turn Ideas into Stunning AI Art
    //       </h1>
    //       <p className="text-lg md:text-xl mb-6 max-w-xl text-gray-200">
    //         Generate high-quality images from simple text prompts.
    //       </p>

    //       <div className="flex gap-4">
    //         <Link href="#">
    //           <Button className="bg-linear-to-r from-pink-500 via-purple-500 bg-red-500">
    //             Generate Now
    //           </Button>
    //         </Link>

    //         <Link href="/pricing">
    //           <Button variant="outline" className="text-white">
    //             View Pricing
    //           </Button>
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div
  className="h-[80vh] w-full bg-cover bg-center bg-no-repeat flex items-center rounded-lg shadow-2xl"
  style={{
    backgroundImage:
      "url('https://cdn.dribbble.com/userupload/37890703/file/original-e6cc69dfa7fe953dfd7e3b2e63d9f13c.png?resize=2048x1717&vertical=center')",
  }}
>
  {/* Overlay */}
  <div className="w-full h-full rounded-lg bg-black/40 flex items-center">
    <div className="max-w-7xl mx-auto px-6 text-white">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-2xl">
        Turn Ideas into Stunning AI Art
      </h1>

      <p className="text-lg md:text-xl mb-6 max-w-xl text-gray-200">
        Generate high-quality images from simple text prompts.
      </p>

      <div className="flex gap-4">
        <Link href="#">
          <Button className="bg-gradient-to-r from-pink-500 via-purple-500 to-red-500">
            Generate Now
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