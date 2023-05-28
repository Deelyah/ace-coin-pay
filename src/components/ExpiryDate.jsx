const ExpiryDate = () => {
  // const [isFocused, setisFocused] = useState(false);

  return (
    <div className="flex mb-8">
      <div className="w-3/5">
        <h2 className="font-bold text-[#05365c] text-lg mb-2">Expiry Date</h2>
        <div className="description flex items-center">
          <p className="text-xs text-[#8e96a3] font-medium">
            Enter the expiration date of the card
          </p>
        </div>
      </div>
      <div className="flex ml-auto w-[400px] items-center">
        <input
          required
          type="text"
          className="focus:outline-none focus:border-[#0077B6] border-2 border-[#e0e0e080] rounded-md w-full px-4 py-5"
        />
        <span className="mx-5 text-[#05365c] font-medium">/</span>
        <input
          required
          type="text"
          className="focus:outline-none focus:border-[#0077B6] border-2 border-[#e0e0e080] rounded-md w-full px-4 py-5"
        />
      </div>
    </div>
  );
};

export default ExpiryDate;
