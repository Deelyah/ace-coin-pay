import keyPad from "../assets/dots.svg";
import { useState } from "react";

const Password = () => {
  const [isFocused, setisFocused] = useState(false);

  return (
    <div className="flex items-start mb-8">
      <div className="w-3/5">
        <h2 className="font-bold text-[#05365c] text-lg mb-2">Password</h2>
        <div className="description flex items-center">
          <p className="text-xs text-[#8e96a3] font-medium">
            Enter your dynamic password
          </p>
        </div>
      </div>
      <div
        className={`${
          isFocused ? "border-[#0077B6] " : "border-[#e0e0e080] "
        } border-2 rounded-md w-[400px] px-4 flex items-center`}
      >
        <input
          required
          onFocus={() => {
            setisFocused(true);
          }}
          onBlur={() => {
            setisFocused(false);
          }}
          type="password"
          placeholder="**********"
          className="flex items-center mx-5 py-5 text-2xl w-full focus:outline-none bg-transparent font-semibold text-[#05365c] placeholder:font-normal"
        />
        <div>
          <img
            src={keyPad}
            alt="verified"
            height="24px"
            width="24px"
            className="opacity-30"
          />
        </div>
      </div>
    </div>
  );
};

export default Password;
