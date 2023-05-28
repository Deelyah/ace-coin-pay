import { useState } from "react";
import masterCard from "../assets/mc_symbol.svg";
import verified from "../assets/verified-badge.svg";
const CardNumberSection = () => {
  const [isFocused, setisFocused] = useState(false);

  return (
    <div className="mt-20 mb-8">
      <div className="flex flex-col">
        <div className="flex">
          <div className="flex flex-col">
            <h2 className="font-bold text-[#05365c] text-lg mb-2">
              Card number
            </h2>
            <p className="text-xs text-[#8e96a3] font-medium">
              Enter the 15-digit card number on the card
            </p>
          </div>
          <button
            className="text-[#1da1f2] flex items-center ml-auto"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <svg
              fill="#1da1f2"
              height="14px"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 512 512"
              xmlSpace="preserve"
            >
              <g>
                <g>
                  <path
                    d="M311.18,78.008L32.23,356.958L0.613,485.716c-1.771,7.209,0.355,14.818,5.604,20.067
                  c5.266,5.266,12.88,7.368,20.067,5.604l128.759-31.617l278.95-278.95L311.18,78.008z M40.877,471.123l10.871-44.271l33.4,33.4
                                              L40.877,471.123z"
                  />
                </g>
              </g>
              <g>
                <g>
                  <path
                    d="M502.598,86.818L425.182,9.402c-12.536-12.536-32.86-12.536-45.396,0l-30.825,30.825l122.812,122.812l30.825-30.825
                                              C515.134,119.679,515.134,99.354,502.598,86.818z"
                  />
                </g>
              </g>
            </svg>
            <span className="font-medium ml-2">Edit</span>
          </button>
        </div>
        <div
          className={`${
            isFocused ? "border-[#0077B6] " : "border-[#e0e0e080] "
          }border-2 rounded-md w-full px-4 bg-[#f5f8ff] flex items-center mt-5`}
        >
          <div>
            <img src={masterCard} alt="mastercard" width="52px" height="48px" />
          </div>
          <input
            required
            onFocus={() => {
              setisFocused(true);
            }}
            onBlur={() => {
              setisFocused(false);
            }}
            type="text"
            placeholder="4444 - 9839 - 9033"
            className="mx-5 py-5 text-2xl w-full focus:outline-none bg-transparent font-semibold text-[#05365c] placeholder:font-normal"
          />
          <div>
            <img src={verified} alt="verified" height="24px" width="24px" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardNumberSection;
