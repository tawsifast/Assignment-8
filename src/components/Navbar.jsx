import { Link, Button } from "@heroui/react";

const Navbar = () => {
  return (
    <div>
      <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
        <header className="flex h-16 items-center justify-between px-6">
          <div>Logo</div>
          <ul className="flex items-center gap-5">
            <li><Link href={"/"}>Home</Link></li>
            <li><Link href={"/product"}>Product</Link></li>
            <li><Link href={"/profile"}>Profile</Link></li>
          </ul>
          <div className="flex gap-2">
              <Button><Link href={"/signup"} className={"text-white"}>Sign Up</Link></Button>
              <Button><Link href={"/signin"} className={"text-white"}>Sign In</Link></Button>
          </div>
        </header>
      </nav>
    </div>
  );
};

export default Navbar;
