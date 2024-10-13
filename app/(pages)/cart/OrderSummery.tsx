import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { FaArrowRight } from "react-icons/fa6";

const OrderSummery = () => {
  return (
    <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
      <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
        <p className="text-xl font-semibold text-gray-900 ">Order summary</p>

        <div className="space-y-4">
          <div className="space-y-2">
            <dl className="flex items-center justify-between gap-4">
              <dt className="text-base font-normal text-gray-500 ">
                Original price
              </dt>
              <dd className="text-base font-medium text-gray-900 ">
                $7,592.00
              </dd>
            </dl>

            <dl className="flex items-center justify-between gap-4">
              <dt className="text-base font-normal text-gray-500 ">Savings</dt>
              <dd className="text-base font-medium text-red-600">-$299.00</dd>
            </dl>

            <dl className="flex items-center justify-between gap-4">
              <dt className="text-base font-normal text-gray-500 ">
                Store Pickup
              </dt>
              <dd className="text-base font-medium text-gray-900 ">$99</dd>
            </dl>

            <dl className="flex items-center justify-between gap-4">
              <dt className="text-base font-normal text-gray-500 ">Tax</dt>
              <dd className="text-base font-medium text-gray-900 ">$799</dd>
            </dl>
          </div>

          <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
            <dt className="text-base font-bold text-gray-900 ">Total</dt>
            <dd className="text-base font-bold text-green-600 ">$8,191.00</dd>
          </dl>
        </div>

        <div className="flex flex-col gap-3">
          <Button className="flex-1 bg-green-500 font-semibold hover:bg-green-600">
            Proceed to Checkout
          </Button>
          <div className="flex items-center gap-2">
            <hr className="w-full" />
            <span className=" text-gray-500 text-lg "> or </span>
            <hr className="w-full" />
          </div>

          <Button className="font-semibold" variant="destructive">
            Continue Shopping
            <FaArrowRight className="ml-2" />
          </Button>
        </div>
      </div>

      <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
        <form className="space-y-4">
          <p className="mb-2 text-sm font-bold text-gray-900">
            Do you have a voucher or gift card?
          </p>
          <Input type="text" placeholder="Apply Your Voucher Code" />
          <div className="flex">
            
            <Button>
            Apply Code
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrderSummery;
