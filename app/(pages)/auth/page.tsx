"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

const PagesManifestPlugin = () => {
  const [isRightPanelActive, setRightPanelActive] = useState(false);
  
  return (
    <div className="mt-5 flex flex-col items-center justify-center bg-gray-100">
      <div className="container relative bg-white rounded-lg shadow-lg w-[768px] max-w-full min-h-[480px] overflow-hidden">
        {/* Sign In Form */}
        <div
          className={`form-container sign-in-container absolute top-0 translate-x-0 w-1/2 h-full left-0 transition-transform duration-500 ease-in-out
            `}
        >

          <form className="bg-white flex flex-col items-center justify-center h-full p-8 text-center">
            <h1 className="font-bold">Log In To Your Account</h1>
            <div className="social-container my-4 flex space-x-2">
              <Button size={"icon"} variant={"outline"}>
                <FaFacebookF className="text-blue-600" />
              </Button>
              <Button size={"icon"} variant={"outline"}>
                <FcGoogle />
              </Button>
            </div>
            <Input type="email" placeholder="Email" className="mb-4" />
            <Input type="password" placeholder="Password" className="mb-4" />
            <a href="#" className="text-sm underline text-red-500">
              Forgot your password?
            </a>
            <Button className="bg-gradient-to-r from-red-500 to-pink-500 text-white mt-4">
              Sign In
            </Button>
          </form>
        </div>

        {/* Sign Up Form */}
        <div
          className={`form-container sign-up-container absolute top-0 translate-x-full w-1/2 h-full left-0 transition-transform duration-500 ease-in-out
            `}
        >

          <form className="bg-white flex flex-col items-center justify-center h-full p-8 text-center">
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
            <Button className="bg-gradient-to-r from-red-500 to-pink-500 text-white mt-4">
              Sign Up
            </Button>
          </form>
        </div>

        {/* Overlay */}
        <div
          className={`overlay-container absolute top-0 w-1/2 h-full left-1/2 overflow-hidden transition-transform duration-500 ease-in-out ${
            isRightPanelActive ? "-translate-x-full" : "translate-x-0"
          }`}
        >
          <div
            className="overlay bg-gradient-to-r from-red-500 to-pink-500 text-white h-full w-[200%] left-[-100%] absolute transition-transform duration-500 ease-in-out"
            style={{
              transform: isRightPanelActive
                ? "translateX(50%)"
                : "translateX(0)",
            }}
          >
            <div
              className={`overlay-panel overlay-left absolute top-0 left-0 w-1/2 h-full flex flex-col items-center justify-center p-10 text-center transition-transform duration-500 ${
                isRightPanelActive ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              <h1 className="font-bold text-3xl">Welcome Back!</h1>
              <p className="mt-4 text-sm">
                To keep connected with us please login with your personal info
              </p>
              <button
                className="ghost rounded-full border border-white text-white px-8 py-3 font-bold mt-4"
                onClick={() => setRightPanelActive(false)}
              >
                Sign In
              </button>
            </div>
            <div
              className={`overlay-panel overlay-right absolute top-0 right-0 w-1/2 h-full flex flex-col items-center justify-center p-10 text-center transition-transform duration-500 ${
                isRightPanelActive ? "translate-x-20" : "translate-x-0"
              }`}
            >
              <h1 className="font-bold text-3xl">Hello, Friend!</h1>
              <p className="mt-4 text-sm">
                Enter your personal details and start your journey with us
              </p>
              <button
                className="ghost rounded-full border border-white text-white px-8 py-3 font-bold mt-4"
                onClick={() => setRightPanelActive(true)}
              >
                Sign Up
              </button>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PagesManifestPlugin;
