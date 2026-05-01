import Link from "next/link";
import { FaFacebook, FaInstagram, FaInstagramSquare, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-teal-900 text-white h-[50vh] mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-4 gap-8">

        {/* Logo / About */}
        <div>
          <h2 className="text-2xl font-bold mb-3">MyApp</h2>
          <p className="text-gray-400 text-sm">
            We help you create stunning AI-powered images from simple ideas.
            Fast, creative, and powerful.
          </p>
        </div>

        {/* Contact Info */}
        <div className="space-y-3">
          <h3 className="font-semibold">Contact</h3>
          <p className="text-gray-400 text-sm">Email: 0070tawsif@gmail.com</p>
          <p className="text-gray-400 text-sm">Phone: +880 0140 379 4140</p>
          <p className="text-gray-400 text-sm">Chattagram, Bangladesh</p>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="font-semibold mb-3">Social</h3>
          <ul className="space-y-2 list-none p-0">
            <li >
              <Link href="#" className="no-underline hover:underline  gap-2 flex items-center text-gray-400">
                <FaFacebook className="text-blue-600" />Facebook
              </Link>
            </li>
            <li>
              <Link href="#" className="no-underline hover:underline gap-2 flex items-center text-gray-400">
               <FaTwitter  className="text-blue-500"/> Twitter
              </Link>
            </li>
            <li>
              <Link href="#" className="no-underline hover:underline gap-2 flex items-center text-gray-400">
                <FaInstagram className="text-pink-600"/>Instagram
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-semibold mb-3">Legal</h3>
          <ul className="space-y-2 list-none p-0">
            <li>
              <Link href="/privacy" className="no-underline hover:underline text-gray-400">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="no-underline hover:underline text-gray-400">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 text-center py-4 text-sm text-gray-400">
        © {new Date().getFullYear()} MyApp. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;