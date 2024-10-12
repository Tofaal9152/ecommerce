import { NavigationMenuDemo } from "./Navbar2Navigation";

const Navbar2 = () => {
  const categories = [
    "লেখক",
    "বিষয়",
    "প্রকাশনী",
    "বইমেলা ২০২৪",
    "ই-বুক",
    "HSC ও ভর্তি প্রস্তুতি",
    "ইসলামী বই",
    "ইংরেজি ভাষার বই",
    "পশ্চিমবঙ্গের বই",
    "অতিরিক্ত ছাড়ের বই",
  ];

  return (
    <div className=" w-full bg-white">
      <div className="max-w-6xl  mx-auto flex items-center justify-evenly py-2">
        <NavigationMenuDemo />
      </div>
    </div>
  );
};

export default Navbar2;
