import microChip from "../assets/chip.png";
import wifi from "../assets/wifi.png";
import masterCard from "../assets/mastercard-2.svg";
import ProductDetails from "./ProductDetails";
import note from "../assets/docket.png";
const RightSide = () => {
  return (
    <div className="w-2/5 flex justify-center">
      <div className="flex w-full justify-center relative">
        <div className="absolute flex flex-col items-center border z-30">
          <span className="block w-20 h-4 bg-[#035fff]"></span>
          <div className="flex flex-col rounded-2xl absolute top-1 backdrop-blur-lg border w-64 shadow-md bg-gradient-to-br from-[#ffffff99] to-[#fff] p-8">
            <div className="flex justify-between items-center mb-32">
              <div className="w-10 h-14">
                <img src={microChip} alt="chip" className="object-contain" />
              </div>
              <div className="h-7 w-7">
                <img src={wifi} alt="wifi" className="w-7 h-7" />
              </div>
            </div>
            <div className="mt-auto">
              <div>
                <h2 className="mb-2 text-[#616161] font-medium">
                  Jonathan Michael
                </h2>
                <div className="flex items-center">
                  <div className="flex ">
                    <span className="block rounded-full w-1.5 h-1.5 mr-1.5 bg-[#17244c]"></span>
                    <span className="block rounded-full w-1.5 h-1.5 mr-1.5 bg-[#17244c]"></span>
                    <span className="block rounded-full w-1.5 h-1.5 mr-1.5 bg-[#17244c]"></span>
                    <span className="block rounded-full w-1.5 h-1.5 mr-1.5 bg-[#17244c]"></span>
                  </div>
                  <p className="text-[#05365c] font-bold">{"3456"}</p>
                </div>
              </div>
              <div className="flex justify-between items-center mt-8">
                <p className="font-semibold">09/22</p>
                <div className="w-[52px] h-10">
                  <img src={masterCard} alt="mastercard" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center relative top-[130px]">
          <div className="bg-[#f0f3f8] w-4/5 h-fit border rounded-2xl pb-7">
            <ProductDetails />
            <div className="flex relative pb-8 items-center">
              <span className="block w-full border-b-4 border-[#cbcbcb] border-dashed"></span>
              <div className="absolute w-full flex justify-between">
                <div className="w-14 h-10 relative -left-10 rounded-full bg-white"></div>
                <div className="w-14 h-10 relative -right-10 rounded-full bg-white"></div>
              </div>
            </div>
            <div className="px-8 flex items-center">
              <div className="flex flex-col">
                <p className="text-[#8e96a3] text-sm font-medium">
                  You have to pay
                </p>
                <div className="flex items-end mt-2">
                  <h3 className="text-3xl text-[#05365c] font-bold">
                    549 <span className="font-normal text-xl">.99</span>
                  </h3>
                  <p className="text-xl text-[#8e96a3] ml-2">USD</p>
                </div>
              </div>
              <div className="w-6 h-6 ml-auto">
                <img src={note} alt="note icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
