import { AiOutlineBook } from "react-icons/ai";
import { FaBookOpen, FaBookmark, FaBookReader, FaClipboardList, FaRegNewspaper } from "react-icons/fa";

const TemplateCategory = ({
  Icon,
  title,
}: {
  Icon: React.ElementType;
  title: string;
}) => {
  return (
    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
      <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-2">
        <Icon className="text-black text-3xl" />
      </div>
      <h3 className="text-md font-semibold text-gray-800">{title}</h3>
    </div>
  );
};

const Category = () => {
  const categories = [
    { icon: AiOutlineBook, title: "বইয়ের তালিকা" },
    { icon: FaBookOpen, title: "নতুন বই" },
    { icon: FaBookmark, title: "বইয়ের সূচী" },
    { icon: FaBookReader, title: "পাঠকের পছন্দ" },
    { icon: FaClipboardList, title: "বইয়ের রিভিউ" },
    { icon: FaRegNewspaper, title: "প্রকাশনার খবর" },
    { icon: FaBookReader, title: "পাঠকের পছন্দ" },
    { icon: AiOutlineBook, title: "বইয়ের তালিকা" },
    // Add more categories as needed
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
      {categories.map((category, index) => (
        <TemplateCategory
          key={index}
          Icon={category.icon}
          title={category.title}
        />
      ))}
    </div>
  );
};

export default Category;
