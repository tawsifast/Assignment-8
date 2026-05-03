import Image from "next/image";
import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div>
       <div className="bg-gray-50 flex flex-col items-center justify-center text-center px-6">
      
      <Image
        src="/notFound__2_-removebg-preview.png"
        alt="Not Found"
        width={250}
        height={250}
        className="rounded-xl"
      />

      <h1 className="text-9xl font-bold text-[#1A1A2E]">404</h1>
      
      <h2 className="text-2xl font-semibold text-[#1A1A2E] mt-2">
        Page Not Found
      </h2>
      
      <p className="text-gray-400 mt-2 max-w-md">
        The page you are looking for does not exist or has been moved.
      </p>

      <Link href="/">
        <button className="mt-2 bg-[#E94560] text-white px-6 py-3 rounded-md hover:bg-[#c73652] transition-all duration-300">
          Back to Home
        </button>
      </Link>

    </div>
    </div>
  );
};

export default NotFoundPage;
