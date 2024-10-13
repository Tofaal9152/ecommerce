import CartProduct from "./CartProduct";
import OrderSummery from "./OrderSummery";
import SuggestionProduct from "./SuggestionProduct";

const page = () => {
  return (
    <section className="bg-white mt-4 max-w-7xl mx-auto pb-8 antialiased dark:bg-gray-900 md:pb-16 pt-4 rounded-md">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
          <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
            <div className="space-y-6">
              <CartProduct />
            </div>
            <SuggestionProduct />
          </div>
          <OrderSummery />
        </div>
      </div>
    </section>
  );
};

export default page;
