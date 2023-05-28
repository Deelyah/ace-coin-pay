import { useFormContext } from "../store/formContext";
const Home = () => {
  const { setformIsVisible } = useFormContext();
  return (
    <div>
      <div className="bg-white p-10 rounded-xl flex flex-col items-center justify-center">
        <h3 className="font-bold text-[#05365c] text-2xl mb-8">
          Thank you for shopping with us
        </h3>
        <button
          className="py-3 px-5 border rounded-md hover:bg-gray-200"
          onClick={() => {
            setformIsVisible(true);
          }}
        >
          Proceed to pay
        </button>
      </div>
    </div>
  );
};

export default Home;
