import { useState } from "react";
import debitcard from "../assets/debit-card.png";
const TheHeader = () => {
  let currentTime = new Date().toLocaleTimeString();
  let splitTime = currentTime.split("");
  const [hour1, sethour1] = useState(splitTime[0]);
  const [hour2, sethour2] = useState(splitTime[1]);
  const [min1, setmin1] = useState(splitTime[3]);
  const [min2, setmin2] = useState(splitTime[4]);

  const [sec1, setsec1] = useState(splitTime[6]);
  const [sec2, setsec2] = useState(splitTime[7]);
  setInterval(() => {
    currentTime = new Date().toLocaleTimeString();
    sethour1(currentTime?.split("")[0]);
    sethour2(currentTime?.split("")[1]);
    setmin1(currentTime?.split("")[3]);
    setmin2(currentTime?.split("")[4]);

    setsec1(currentTime?.split("")[6]);
    setsec2(currentTime?.split("")[7]);
  }, 1000);

  return (
    <div className="flex flex-col sm:flex-row items-center">
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full bg-[#035fff] flex items-center justify-center">
          <img src={debitcard} alt="debit card" className="w-full" />
        </div>
        <h1 className="text-3xl ml-4 font-semibold text-[#05365c]">
          AceCoin
          <span className="font-light">Pay</span>
        </h1>
      </div>
      <div className="ml-auto flex items-center">
        <div className="h-10 w-7 flex items-center justify-center bg-[#17254c] text-white rounded-[4px] ml-1">
          {hour1}
        </div>
        <div className="h-10 w-7 flex items-center justify-center bg-[#17254c] text-white rounded-[4px] ml-1">
          {hour2}
        </div>
        <span className="mx-0.5 font-semibold">:</span>
        <div className="h-10 w-7 flex items-center justify-center bg-[#17254c] text-white rounded-[4px]">
          {min1}
        </div>
        <div className="h-10 w-7 flex items-center justify-center bg-[#17254c] text-white rounded-[4px] ml-1">
          {min2}
        </div>
        <span className="mx-0.5 font-semibold">:</span>
        <div className="h-10 w-7 flex items-center justify-center bg-[#17254c] text-white rounded-[4px]">
          {sec1}
        </div>
        <div className="h-10 w-7 flex items-center justify-center bg-[#17254c] text-white rounded-[4px] ml-1">
          {sec2}
        </div>
      </div>
    </div>
  );
};

export default TheHeader;
