import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import PopularProducts from "@/components/PopularProducts";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner/>
      <PopularProducts/>
    </div>
  );
}
