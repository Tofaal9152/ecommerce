import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { User } from "@/models/user.models";
import { FaFacebookF } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import bcrypt from "bcryptjs";
import database from "@/DataBase/database";

const SignIn = () => {
  return (
    <div
      className={`form-container sign-in-container absolute top-0 translate-x-0 w-1/2 h-full left-0 transition-transform duration-500 ease-in-out
            `}
    >
      <form
        // action={async (formData: FormData) => {
          // "use server";
          // const email = formData.get("email") as string | undefined;
          // const password = formData.get("password") as string | undefined;

          // if (!email || !password) {
          //   return alert("Please fill all the fields");
          // }
          // await database()
          // const user = await User.findOne({ email }).select("+password");
          // if (!user ) {
          //   return alert("Invalid Email or Password");
          // }
          
          // const isMatch = await bcrypt.compare(password, user.password);
          // if (!isMatch) {
          //   return alert("Invalid Email or Password");
          // }
          // return alert("Logged In Successfully");

          // console.log(email, password);
        // }}
        className="bg-white flex flex-col items-center justify-center h-full p-8 text-center"
      >
        <h1 className="font-bold">Log In To Your Account</h1>
        <div className="social-container my-4 flex space-x-2">
          <Button size={"icon"} variant={"outline"}>
            <FaFacebookF className="text-blue-600" />
          </Button>
          <Button size={"icon"} variant={"outline"}>
            <FcGoogle />
          </Button>
        </div>
        <Input name="email" type="text" placeholder="Email" className="mb-4" />
        <Input
          name="password"
          type="password"
          placeholder="Password"
          className="mb-4"
        />
        <p className="text-sm underline text-red-500">Forgot your password?</p>
        <Button
          type="submit"
          className=" hover:shadow-sm hover:shadow-red-400 bg-gradient-to-r from-red-500 to-pink-500 text-white mt-4"
        >
          Sign In
        </Button>
      </form>
    </div>
  );
};

export default SignIn;
