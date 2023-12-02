import React from "react";
import iconComplete from "../assets/iconComplete.png";

const Confirm = ({ setConfirmed }) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-[-760px] mx-auto h-screen max-w-lg">
        <img src={iconComplete} alt="" className="block mx-auto" />
        <h1 className="text-slate-800 text-3xl my-6 uppercase text-center">
          Thank you!
        </h1>

        <p className="text-slate-400 text-center">
          We've added your card details
        </p>

        <button
          onClick={() => setConfirmed(false)}
          className="block mx-auto bg-purple-950 rounded-md text-white text-base tracking-wide lg:text-lg mt-10 w-full py-4 px-6"
        >
          Continue
        </button>
      </div>
    </>
  );
};

export default Confirm;
