import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  FaStar,
  FaStarHalfAlt,
  FaThumbsUp,
  FaThumbsDown,
} from "react-icons/fa";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const reviewsData = [
  {
    id: 1,
    name: "Shadman",
    avatar: "https://github.com/shadcn.png",
    rating: 4.5,
    date: "1 month ago",
    reviewText:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore.",
  },
  {
    id: 2,
    name: "John Doe",
    avatar: "",
    rating: 4,
    date: "2 weeks ago",
    reviewText:
      "Great product! The quality exceeded my expectations. Highly recommend.",
  },
  {
    id: 3,
    name: "Jane Smith",
    avatar: "",
    rating: 5,
    date: "3 days ago",
    reviewText:
      "Absolutely loved it! This monitor is amazing for the price point.",
  },
];

const Reviews = () => {
  return (
    <div className="max-w-7xl mx-auto mt-8 bg-white p-6 rounded-lg shadow-lg">
      {/* Tabs */}
      <Tabs defaultValue="Summary" className="mb-8">
        <TabsList>
          <TabsTrigger value="Summary">Summary</TabsTrigger>
          <TabsTrigger value="Specification">Specification</TabsTrigger>
          <TabsTrigger value="Author">Author</TabsTrigger>
        </TabsList>
        <TabsContent value="Summary" className="p-4  rounded-lg ">
          <p className="text-gray-800 text-lg leading-relaxed">
            ‘যেদিন মানুষের সৃষ্টি, সেদিন থেকেই মানুষ মুসাফির। জান্নাত বা
            জাহান্নামই তাদের সফরের শেষ মনজিল। দুটোর একটিতেই হয় তার অবতরণ। জ্ঞানী
            মাত্রই জানেন, সফর কষ্ট, ক্লান্তি ও বিপদে ভরা। সফরে কোনো ভোগ, উপভোগ,
            আরাম-আয়েশের খোঁজ করা বোকামি, এগুলো পাওয়াও সাধারণত অসম্ভব। এগুলোর
            নাগাল তখনই পাওয়া যাবে, যখন এ দীর্ঘ সফর শেষ হবে। সফরের সময়ের কোনো
            পদক্ষেপ, কোনো মুহূর্তই স্থির নয়। সফরকারীও স্থির নয়। সদা চলমান একজন
            মুসাফির সে। যে পাথেয় তাকে উদ্দিষ্ট মনজিলে পৌঁছে দেবে, তাকে সে পাথেয়
            প্রস্তুত করতে হবে। যখন মুসাফির অবতরণ করে বা ঘুমিয়ে পড়ে কিংবা আরাম
            করে, এর পরেই তাকে পায়ে হেঁটে চলার জন্য প্রস্তুত হতে হয়।
          </p>
        </TabsContent>

        <TabsContent value="Specification">
          <Table>
            <TableCaption>A list of this Product</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="text-left">Field</TableHead>
                <TableHead className="text-left">Details</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Title</TableCell>
                <TableCell>সময় কখনো ফিরে আসে না</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Author</TableCell>
                <TableCell>শাইখ আব্দুল মালিক আল কাসিম</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Translator</TableCell>
                <TableCell>আবদুল্লাহ ইউসুফ</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Publisher</TableCell>
                <TableCell>রুহামা পাবলিকেশন</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Edition</TableCell>
                <TableCell>1st Published, 2019</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Number of Pages</TableCell>
                <TableCell>88</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Country</TableCell>
                <TableCell>বাংলাদেশ</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Language</TableCell>
                <TableCell>বাংলা</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TabsContent>

        <TabsContent
          value="Author"
          className="p-4 bg-gray-50 rounded-lg shadow-md"
        >
          <div className="mb-6">
           
              <Avatar className="w-20 h-20 border-2 border-blue-500 rounded-full overflow-hidden">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="Author Avatar"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <h3 className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition duration-200">
                Md Tofaal Ahmed
              </h3>
          

           
            <p className="text-gray-600 leading-relaxed mt-2">
              Shadman is a Full Stack Developer and a Tech Enthusiast. He loves
              Shadman is a Full Stack Developer and a Tech Enthusiast. He loves
              Shadman is a Full Stack Developer and a Tech Enthusiast. He loves
              Shadman is a Full Stack Developer and a Tech Enthusiast. He loves
              Shadman is a Full Stack Developer and a Tech Enthusiast. He loves
              building web applications and has a keen interest in UI/UX Design.
            </p>
          </div>
        </TabsContent>
      </Tabs>

      {/* Reviews */}
      <hr className="py-[1rem]" />
      <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
      {reviewsData.map((review) => (
        <div key={review.id} className="flex items-start space-x-6 mb-8">
          {/* Avatar */}
          <Avatar className="w-10 h-10">
            {review.avatar ? (
              <AvatarImage src={review.avatar} />
            ) : (
              <AvatarFallback>{review.name[0]}</AvatarFallback>
            )}
          </Avatar>

          {/* Review Content */}
          <div>
            {/* Name and Date */}
            <div className="flex items-center space-x-3">
              <h2 className="text-lg font-semibold text-gray-900">
                {review.name}
              </h2>
              <span className="text-sm text-gray-500">{review.date}</span>
            </div>

            {/* Rating */}
            <div className="flex items-center text-yellow-400 mt-1">
              {[...Array(Math.floor(review.rating))].map((_, index) => (
                <FaStar key={index} />
              ))}
              {review.rating % 1 !== 0 && <FaStarHalfAlt />}
              <p className="text-gray-600 ml-4">{review.rating}/5</p>
            </div>

            {/* Review Text */}
            <p className="mt-4 text-gray-700">{review.reviewText}</p>

            {/* Like/Dislike Buttons */}
            <div className="flex items-center mt-4 space-x-4">
              <button className="flex items-center text-gray-600 hover:text-blue-500">
                <FaThumbsUp className="mr-1" /> 0
              </button>
              <button className="flex items-center text-gray-600 hover:text-red-500">
                <FaThumbsDown className="mr-1" /> 0
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
