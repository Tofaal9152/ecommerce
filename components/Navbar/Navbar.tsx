import { User2 } from "lucide-react";
import Link from "next/link";
import { FaUserTie } from "react-icons/fa";
import { PiShoppingCartSimple } from "react-icons/pi";
import Search from "./Search";

const Navbar = () => {
    
  return (
    <div className="py-4 bg-white z-50 shadow-sm sticky top-0 p-4">
      <div className="max-w-6xl mx-auto flex items-center justify-evenly px-4 lg:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <img
              src="/tolax1.png"
              alt="Rokomari Logo"
              className="h-10 relative bottom-1"
            />
          </Link>
        </div>
        {/* Search Input */}
        <Search/>
        {/* Navigation Options */}
        <div className="flex items-center space-x-6">
          {/* Sign In */}
          <Link
            href="/auth"
            className="flex items-center space-x-2 text-gray-600 hover:text-black"
          >
            <User2 className="w-5 h-5" />
            <span>Sign In</span>
          </Link>

          {/* Become a Seller */}
          <Link
            href="/seller"
            className="flex items-center space-x-2 text-gray-600 hover:text-black"
          >
            <FaUserTie className="w-5 h-5" />
            <span>Become a Seller</span>
          </Link>

          {/* Cart */}
          <Link
            href="/cart"
            className="flex items-center space-x-2 text-gray-600 hover:text-black"
          >
            <div className="relative">
              <PiShoppingCartSimple className="w-6 h-6" />
              <span className="absolute -top-3 -right-1 bg-blue-600 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs font-bold">
                1
              </span>
            </div>
            <span>Cart</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
