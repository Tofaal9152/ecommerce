import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { User } from "@/models/user.models";
import { FaFacebookF } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import bcrypt from 'bcryptjs';
import database from "@/DataBase/database";
const SignUp = () => {
  return ( 
    <div
      className={`form-container sign-up-container absolute top-0 translate-x-full w-1/2 h-full left-0 transition-transform duration-500 ease-in-out
            `}
    >
      <form
        // action={async (formData: FormData) => {
        //   "use server";
        //   const email = formData.get("email") as string | undefined;
        //   const password = formData.get("password") as string | undefined;

        //   if (!email || !password) {
        //     throw new Error("All fields are required");
        //   }
        //   await database()
        //   const user = await User.findOne({ email });
        //   if (user) {
        //     throw new Error("User already exists");
        //   }
        //   const hashedPassword = await bcrypt.hash(password, 12);
        //   await User.create({
        //     email,
        //     password: hashedPassword,
        //   });
        //     return alert("User created successfully");

        // }}
        className="bg-white flex flex-col items-center justify-center h-full p-8 text-center"
      >
        <h1 className="font-bold">Create an Account</h1>
        <div className="social-container my-4 flex space-x-2">
          <Button size={"icon"} variant={"outline"}>
            <FaFacebookF className="text-blue-600" />
          </Button>
          <Button size={"icon"} variant={"outline"}>
            <FcGoogle />
          </Button>
        </div>
        <Input type="text" placeholder="Name" className="mb-4" />
        <Input type="email" placeholder="Email" className="mb-4" />
        <Input type="password" placeholder="Password" className="mb-4" />
        <Button
          type="submit"
          className="bg-gradient-to-r from-blue-500 to-pink-500 text-white mt-4"
        >
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default SignUp;
