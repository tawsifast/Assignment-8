import Banner from "@/components/Banner";
import { getProduct } from "@/components/data";
import Marque from "@/components/Marque";
import Navbar from "@/components/Navbar";
import PopularProducts from "@/components/PopularProducts";
import SummerCareTips from "@/components/SummerCareTips";
import TopBrands from "@/components/TopBrands";
import Image from "next/image";

export default function Home() {
  
  return (
    <div>
      <Banner/>
      <PopularProducts/>
      <SummerCareTips/>
      <Marque/>
      <TopBrands/>
    </div>
  );
}
