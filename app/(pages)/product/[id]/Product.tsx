"use client";
import { Badge } from "@/components/ui/badge";
import { FaStar } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { BsCashCoin } from "react-icons/bs";
import ProductImage from "./ProductImage";
const Product = () => {
  const productName = 'AOC 24B20JH2 23.8" 100Hz 1ms FHD IPS Panel Monitor';
  const productPrice = "15,000৳";
  const regularPrice = "15,999৳";
  const brand = "AOC";
  const Status = "In Stock";
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto p-4 flex  justify-between  gap-4">
        {/* main image */}
        <ProductImage />
        {/* product details */}
        <div className="">
          {/* product name */}
          <h1 className=" text-2xl font-bold  ">{productName}</h1>
          {/* product description */}
          {/*  */}
          <div className="flex flex-wrap gap-3 mt-4">
            <Badge className="bg-slate-100" variant="secondary">
              Price: {productPrice} <s>{regularPrice}</s>
            </Badge>
            <Badge className="bg-slate-100" variant="secondary">
              Regular Price: {regularPrice}
            </Badge>
            <Badge className="bg-slate-100" variant="secondary">
              Status:{Status}
            </Badge>
            <Badge className="bg-slate-100" variant="secondary">
              Brand:{brand}
            </Badge>
          </div>
          {/*  */}
          <div className="flex items-center mt-4">
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <span className="ml-2 text-gray-600">
              11 Ratings |{" "}
              <a href="#review" className="text-blue-500 hover:underline">
                8 Reviews
              </a>
            </span>
          </div>
          {/*  */}
          <div className="mt-4">
            <h2 className="text-lg font-semibold">Key Features:</h2>
            <ul className="list-disc list-inside">
              <li>23.8" FHD IPS Panel</li>
              <li>100Hz Refresh Rate</li>
              <li>1ms Response Time</li>
              <li>VESA Wall Mount</li>
              <li>HDMI and VGA Connectivity</li>
            </ul>
          </div>
          {/*  */}
          <div className="mt-6 flex gap-4">
            <button className="bg-blue-500 flex items-center text-white px-6 py-2 rounded-md hover:bg-blue-600">
              <FaShoppingCart className="mr-2" /> <span> Add to Cart</span>
            </button>
            <button className="bg-green-500 flex items-center text-white px-6 py-2 rounded-md hover:bg-green-600">
              <BsCashCoin className="mr-2" /> <span> Buy Now</span>
            </button>
          </div>
          {/*  */}
          <div id="review" className="mt-8">
            <h3 className="text-xl font-semibold">Customer Reviews:</h3>
            <div className="mt-4">
              <div className="border p-4 rounded-md">
                <div className="flex items-center">
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-gray-400" />
                  <span className="ml-2 text-gray-600">John Doe</span>
                </div>
                <p className="mt-2 text-sm text-gray-700">
                  Great monitor! The colors are vibrant, and the 100Hz refresh
                  rate makes a noticeable difference.
                </p>
              </div>
            </div>
          </div>

          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default Product;
