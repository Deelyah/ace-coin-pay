import CVVNumber from "./CVVNumber";
import CardNumberSection from "./CardNumberSection";
import ExpiryDate from "./ExpiryDate";
import Password from "./Password";
import TheHeader from "./TheHeader";
import { useFormContext } from "../store/formContext";

const LeftSide = () => {
  const { setformIsVisible } = useFormContext();
  return (
    <div className="w-full md:w-4/5 xl:w-3/5 pr-12">
      <TheHeader />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setformIsVisible(false);
        }}
      >
        <CardNumberSection />
        <CVVNumber />
        <ExpiryDate />
        <Password />
        <button className="w-full rounded-lg text-white text-xl mt-3.5 bg-[#035fff] py-6 hover:bg-[#1254d6]">
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default LeftSide;
