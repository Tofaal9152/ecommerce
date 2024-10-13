import { Button } from "@/components/ui/button";
import { cartItems } from "@/constant";
import { RxCross2 } from "react-icons/rx";

const CartProduct = () => {
  return (
    <div className="space-y-6">
      {cartItems.map((item) => (
        <div
          key={item.id}
          className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6"
        >
          <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
            <div className="shrink-0 md:order-1">
              <img
                className="h-20 w-20 dark:hidden"
                src={item.image}
                alt={item.name}
              />
            </div>

            <div className="flex items-center justify-between md:order-3 md:justify-end">
              <div className="flex items-center">
                <Button className="h-7 w-7" variant={"outline"} size={"icon"}>+</Button>
                <input
                  type="text"
                  className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 dark:text-white"
                  value={item.quantity}
                  readOnly
                />
                <Button className="h-7 w-7" variant={"outline"} size={"icon"}>-</Button>
                
              </div>
              <div className="text-end md:order-4 md:w-32">
                <p className="text-base font-bold text-green-600 dark:text-white">
                  ${item.price}
                </p>
              </div>
            </div>

            <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
              <div className="text-base font-medium text-gray-900 hover:underline dark:text-white">
                {item.name}
              </div>

              <div className="flex items-center gap-4">
                {/* <Button variant="link">
                  <RxCross2 size={16} className="mr-1" />
                  Add to Favorites
                </Button> */}
                <Button variant="link" className="text-red-600">
                  <RxCross2 size={16} className="mr-1" />
                  Remove
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartProduct;
