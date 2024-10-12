import { FaBookOpen, FaHandsHelping, FaServicestack } from "react-icons/fa";

const FeatureCard = ({
  title,
  description,
  Icon,
}: {
  title: string;
  description: string;
  Icon:any;
}) => {
  return (
    <div className="flex items-center space-x-3 p-4 bg-white rounded-md shadow-md hover:shadow-lg transition-shadow duration-200">
      <div className="flex items-center justify-center bg-blue-600 w-12 h-12 rounded-full">
        <Icon className="text-white text-2xl" />
      </div>
      <div>
        <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
        <p className="text-gray-700 text-sm mt-1">{description}</p>
      </div>
    </div>
  );
};

const Features = () => {
  const featuresData = [
    {
      title: "সেরা ডিস্কাউন্ট এ বেস্টসেলার বই",
      description: "এখন পাচ্ছেন সবচেয়ে বেশি ডিস্কাউন্ট এ বেস্টসেলার বই।",
      icon: FaBookOpen,
    },
    {
      title: "নতুন প্রযুক্তির খবর",
      description: "আপনার প্রযুক্তির সব খবর এক জায়গায়!",
      icon: FaHandsHelping,
    },
    {
      title: "পাঠকের বইয়ের সুপারিশ",
      description: "পাঠকের বইয়ের সুপারিশে খুঁজে নিন সেরা বই।",
      icon: FaServicestack,
    },
    // Add more feature objects here with their respective icons
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      {featuresData.map((feature, index) => (
        <FeatureCard
          key={index}
          title={feature.title}
          description={feature.description}
          Icon={feature.icon} // Pass the icon component to the FeatureCard
        />
      ))}
    </div>
  );
};

export default Features;
