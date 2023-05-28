import close from "../assets/close.svg";
import LeftSide from "../components/LeftSide";
import RightSide from "../components/RightSide";
import { useFormContext } from "../store/formContext";
const PaymentForm = () => {
  const { formIsVisible, setformIsVisible } = useFormContext();

  return (
    <div className="bg-white shadow-sm w-full md:w-4/5 xl:w-3/5">
      <div className="flex justify-end">
        <button
          onClick={() => {
            console.log(formIsVisible);
            setformIsVisible(false);
          }}
          title="Close"
          className="bg-gray-50 px-2.5 py-2"
        >
          <img src={close} alt="close" width="20px" height="20px" />
        </button>
      </div>

      <div className="flex flex-col md:flex-row w-full px-3 md:px-12 pt-10 pb-12">
        <LeftSide />
        <RightSide />
      </div>
    </div>
  );
};

export default PaymentForm;
