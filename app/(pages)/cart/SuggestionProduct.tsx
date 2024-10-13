import { Button } from "@/components/ui/button";
import { SuggestionProducts } from "@/constant";
import { FaHeart } from "react-icons/fa";

const SuggestionProduct = () => {
  return (
    <div className="hidden xl:mt-8 xl:block">
      <h3 className="text-2xl font-semibold text-gray-900 ">
      Please Take a Look at This
      </h3>
      <div className="mt-6 grid grid-cols-3 gap-4 sm:mt-8">
        {SuggestionProducts.map((product) => (
          <div
            key={product.id}
            className="space-y-6 overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm  "
          >
            <div className="overflow-hidden rounded">
              <img
                className="mx-auto h-44 w-44 "
                src={product.image}
                alt={`${product.name} image`}
              />
            </div>
            <div>
              <div
                className="text-lg font-semibold leading-tight text-gray-900 hover:underline "
              >
                {product.name}
              </div>
              <p className="mt-2 text-base font-normal text-gray-500 ">
                {product.description}
              </p>
            </div>
            <div>
              <p className="text-lg font-bold text-gray-900 ">
                <span className="line-through"> {product.oldPrice} </span>
              </p>
              <p className="text-lg font-bold leading-tight text-green-600 ">
                {product.newPrice}
              </p>
            </div>
            <div className="mt-6 flex items-center gap-2.5">
              <Button size={"icon"} variant={"outline"}>
                <FaHeart className="text-red-500" />
              </Button>
              <Button className="flex-1">Add to cart</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuggestionProduct;
