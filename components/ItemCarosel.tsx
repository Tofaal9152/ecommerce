import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "./ui/button";

const ItemCarosel = () => {
  return (
    <>
      <div className="flex items-center justify-between my-4">
        <h1 className="text-xl font-bold">সেরা ডিস্কাউন্ট এ বেস্টসেলার বই</h1>
        <Button
          className="border-[#0397d3] hover:bg-[#0397d3] hover:text-white transition-all"
          variant={"outline"}
        >
          View All
        </Button>
      </div>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-full"
      >
        <CarouselContent>
          {Array.from({ length: 16 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="p-2 basis-1/5 bg-white rounded-sm"
            >
              <div className="relative transition-transform hover:scale-105 hover:shadow-md">
                <div className="flex flex-col items-center p-4 cursor-pointer">
                  <img
                    className="rounded-md object-cover w-32 h-44 mb-4"
                    src="https://img.cf.rokomari.com/ProductNew20190903/130X186/d0dc8b9f9_209394.jpg"
                    alt="Bindu Brittante image"
                  />
                  <h4 className="text-lg font-semibold text-center">
                    বিন্দু বৃত্তান্তে
                  </h4>
                  <p className="text-sm text-gray-600 text-center">
                    রেশমী রফিক
                  </p>
                  <p className="text-green-600 text-center mt-2">
                    Product in stock
                  </p>
                  <p className="text-md text-red-500 mt-2 text-center">
                    <s className="text-gray-400">TK. 640</s> TK. 480
                  </p>
                  
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
};

export default ItemCarosel;
