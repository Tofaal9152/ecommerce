"use client";
import { IoIosSearch } from "react-icons/io";
import { useEffect, useState } from "react";

const Search = () => {
  const placeholders = [
    "বই খুঁজুন (যেমনঃ হ্যারি পটার, জাভা, ইত্যাদি)",
    "লেখক খুঁজুন (যেমনঃ জে.কে. রোলিং, স্টিফেন কিং, ইত্যাদি)",
    "বিভাগ খুঁজুন (যেমনঃ কাল্পনিক, প্রোগ্রামিং, ইত্যাদি)",
    "ডিল খুঁজুন (যেমনঃ ১০% ডিস্কাউন্ট, ২০% ডিস্কাউন্ট, ইত্যাদি)",
  ];

  const [currentPlaceholder, setCurrentPlaceholder] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentWord = placeholders[currentIndex];

      // Update the placeholder letter by letter
      if (letterIndex < currentWord.length) {
        setCurrentPlaceholder(currentWord.slice(0, letterIndex + 1));
        setLetterIndex((prev) => prev + 1);
      } else {
        // Move to the next placeholder after the current one is fully displayed
        setCurrentIndex((prev) => (prev + 1) % placeholders.length);
        setLetterIndex(0);
        setCurrentPlaceholder(""); // Reset current placeholder for new word
      }
    }, 100); // Change the letter every 100 milliseconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [currentIndex, letterIndex]);

  return (
    <div className="flex-grow mx-4">
      <div className="relative flex items-center justify-between max-w-lg w-full border rounded-full py-2  pr-4 text-sm focus:outline-none border-blue-600">
        <IoIosSearch size={20} className="text-blue-500 mx-2" />
        <input
          type="text"
          placeholder={currentPlaceholder} // Use dynamic placeholder
          className="outline-none w-full" // Add a custom class for placeholder color
 
        />
      </div>
    </div>
  );
};

export default Search;
