"use client";
import { Button } from "@/components/ui/button";
import { GrFacebookOption } from "react-icons/gr";
import { FcGoogle } from "react-icons/fc";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const page = () => {
  const [toogle, settoogle] = useState(false);
  return (
    <div className="flex relative my-4 items-center justify-center w-[48rem] h-[30rem] bg-white rounded-md  mx-auto">
      {/* login */}
      <div className=" h-full rounded-md   space-y-4 w-1/2 flex-1 flex flex-col items-center justify-center ">
        <h1 className="text-lg font-semibold ">Log In To Your Account</h1>
        <div className="space-x-3">
          <Button variant={"outline"} size={"icon"}>
            <GrFacebookOption />
          </Button>
          <Button variant={"outline"} size={"icon"}>
            <FcGoogle />
          </Button>
        </div>
        <form className="space-y-4 flex flex-col w-full p-8 items-center justify-center">
          <Input placeholder={"Email"} />
          <Input placeholder={"Password"} />
          <p className="text-red-500 underline text-sm">
            Forgot your password?
          </p>
          <Button
            className="bg-gradient-to-r from-red-500 to-pink-500 hover:shadow-md "
            type="submit"
          >
            Sign In
          </Button>
        </form>
      </div>
      {/* sign in */}
      <div className=" h-full rounded-md   space-y-4 w-1/2 flex-1 flex flex-col items-center justify-center ">
        <h1 className="text-lg font-semibold ">Sign In To Your Account</h1>
        <div className="space-x-3">
          <Button variant={"outline"} size={"icon"}>
            <GrFacebookOption />
          </Button>
          <Button variant={"outline"} size={"icon"}>
            <FcGoogle />
          </Button>
        </div>
        <form className="space-y-4 w-full p-8 flex flex-col items-center justify-center">
          <Input placeholder={"Username"} />
          <Input placeholder={"Email"} />
          <Input placeholder={"Password"} />

          <Button
            className="bg-gradient-to-r from-red-500 to-pink-500 hover:shadow-md "
            type="submit"
          >
            Sign Up
          </Button>
        </form>
      </div>
      {/* Overlay */}
      <div
        style={{
          transform: toogle ? "translateX(-50%)" : "translateX(50%)",
        }}
        className={`w-1/2 p-4 space-y-3 h-full absolute bg-gradient-to-r from-red-500 to-pink-500 transition-transform duration-500 ease-in-out flex-1 flex flex-col items-center justify-center -translate-x-0 shadow-md
             ${toogle ? "rounded-l-md" : "rounded-r-md"} 
            `}
      >
        <h1 className="text-xl font-bold text-white">
          {toogle ? "Welcome Back!" : "Hello, Friend!"}
        </h1>
        <p className="text-md font-normal text-white text-center">
          {toogle
            ? "Enter your personal details and start your journey with us"
            : "To keep connected with us please login with your personal info"}
        </p>
        <Button
          onClick={() => settoogle(!toogle)}
          className="bg-gradient-to-r from-red-500 to-pink-500 border-white border"
        >
          {toogle ? "Sign In" : "Sign Up"}
        </Button>
      </div>
    </div>
  );
};

export default page;
