import React from "react";

const WelcomePage = () => {
  return (
    <div className="aspect-[9/16] h-full flex flex-col items-start justify-end bg-[#f7f8f9] p-6">
      <div className="mb-4 max-w-[60%]">
        <p className="text-2xl font-bold">Welcome to PopX</p>
        <p className="text-gray-600">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro,
          ullam.
        </p>
      </div>
      <button className="text-white font-semibold w-full text-center bg-[#f7f8f9] hovering:bg-[#5d0ec0] p-2 rounded-md">
        Create Account
      </button>
      <button className="w-full font-semibold text-center bg-[#cebafb] hover:bg-[#b59de6] p-2 rounded-md">
        Already Registered? Login
      </button>
    </div>
  );
};

export default WelcomePage;
