"use client";
import { productContext } from "@/context/ProductProvider";
import { authClient } from "@/lib/auth-client";
import { Link, Button, Avatar } from "@heroui/react";
import { useContext } from "react";
import { BsCart2 } from "react-icons/bs";

const Navbar = () => {
  const { storedProduct } = useContext(productContext);
  console.log(storedProduct, "context");
  const userData = authClient.useSession();
  const user = userData.data?.user;
  // console.log(user);

  const handleSignOut = async () => {
    await authClient.signOut();
  };
  return (
    <div>
      <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
        <header className="flex h-16 items-center justify-between px-6">
          <div>Logo</div>
          <ul className="flex items-center gap-5">
            <li>
              <Link href={"/"} className={"no-underline"}>
                Home
              </Link>
            </li>
            <li>
              <Link href={"/product"} className={"no-underline"}>
                Product
              </Link>
            </li>
            <li>
              <Link href={"/profile"} className={"no-underline"}>
                Profile
              </Link>
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
