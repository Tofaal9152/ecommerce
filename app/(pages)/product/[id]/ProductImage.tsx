import { useState } from "react";

const ProductImage = () => {
    const [zoomStyle, setZoomStyle] = useState({
        backgroundPosition: "0% 0%",
        backgroundImage: `url("https://www.startech.com.bd/image/cache/catalog/monitor/aoc/24b20jh2/24b20jh2-01-500x500.webp")`,
        backgroundSize: "100%",
      });
    
      const handleMouseMove = (e:any) => {
        const { left, top, width, height } = e.target.getBoundingClientRect();
        const x = ((e.pageX - left) / width) * 100;
        const y = ((e.pageY - top) / height) * 100;
        setZoomStyle((prevState) => ({
          ...prevState,
          backgroundPosition: `${x}% ${y}%`,
        }));
      };
    
      const handleMouseEnter = () => {
        setZoomStyle((prevState) => ({
          ...prevState,
          backgroundSize: "200%", // Magnified size
        }));
      };
    
      const handleMouseLeave = () => {
        setZoomStyle((prevState) => ({
          ...prevState,
          backgroundSize: "100%", // Back to normal size
        }));
      };
    return (
        <div
          className="w-[400px] h-[400px] rounded-md bg-no-repeat cursor-pointer"
          style={zoomStyle}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            className="w-full h-full object-cover opacity-0"
            src="https://www.startech.com.bd/image/cache/catalog/monitor/aoc/24b20jh2/24b20jh2-01-500x500.webp"
            alt="Product"
          />
        </div>
    );
}

export default ProductImage;