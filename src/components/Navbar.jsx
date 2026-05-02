"use client";
import { productContext } from "@/context/ProductProvider";
import { authClient } from "@/lib/auth-client";
import { Link, Button, Avatar } from "@heroui/react";
import { useContext } from "react";
import { BsCart2 } from "react-icons/bs";
import NavLink from "./NavLink";
import Image from "next/image";
import logo from "../../public/logo.png.png"

const Navbar = () => {
  const { storedProduct } = useContext(productContext);
  console.log(storedProduct, "context");

  const userData = authClient.useSession();
  const user = userData.data?.user;
  console.log(user,"image");

  const handleSignOut = async () => {
    await authClient.signOut();
  };
  return (
    <div className="sticky top-0 z-20 bg-teal-600">
      <nav className=" w-full border-b border-separator 
       backdrop-blur">
        <header className="flex h-16 items-center justify-between px-6">
          <div>
            <Image src={logo}
            alt="logo"
            width={50}
            height={40}
            ></Image>
          </div>
          <ul className="flex items-center gap-5">
            <li>
              <NavLink href={"/"} className={"no-underline"}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink href={"/product"} className={"no-underline"}>
                Product
              </NavLink>
            </li>
            <li>
              <NavLink href={"/profile"} className={"no-underline"}>
                Profile
              </NavLink>
            </li>
          </ul>

          {!user && (
            <div className="flex gap-2">
              <Button>
                <Link href={"/signup"} className={"text-white no-underline"}>
                  Sign Up
                </Link>
              </Button>
              <Button>
                <Link href={"/signin"} className={"text-white no-underline"}>
                  Sign In
                </Link>
              </Button>
            </div>
          )}

          {user && (
            <div className="flex items-center gap-2">
              <Link href={"/cart"}>
                <Button variant="outline">
                  <BsCart2 />

                  {storedProduct.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 rounded-full">
                      {storedProduct.length}
                    </span>
                  )}
                </Button>
              </Link>
              <Avatar size="sm">
                <Avatar.Image
                  alt={user?.name}
                  src={user?.image}
                  referrerPolicy="no-referrer"
                />
                <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
              </Avatar>
              <Button onClick={handleSignOut} size="sm" variant="danger">
                Sign out
              </Button>
            </div>
          )}
        </header>
      </nav>
    </div>
  );
};

export default Navbar;
