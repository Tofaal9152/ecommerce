import ItemCarosel from "../ItemCarosel";
import Category from "./Category";
import Features from "./Features";
import MainCarosel from "./MainCarosel";
import SliderAnimation from "./SliderAnimation";

const Hero = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      <MainCarosel />

      <Features />
      <SliderAnimation />
      <Category />
      <ItemCarosel />
      <ItemCarosel />
      <ItemCarosel />
    </div>
  );
};

export default Hero;
