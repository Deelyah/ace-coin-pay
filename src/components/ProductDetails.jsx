import apple from "../assets/apple-13.svg";

const ProductDetails = () => {
  return (
    <ul className="px-8 mt-60 pt-8 pb-4">
      <li className="mb-[18px] flex">
        <p className="text-[#8e96a3] text-sm font-medium">Company</p>
        <p className="flex items-center ml-auto">
          <img src={apple} alt="apple logo" className="w-6 h-6 mr-2.5" />
          <span className="text-[#05365c] font-semibold">Apple</span>
        </p>
      </li>
      <li className="mb-[18px] flex">
        <p className="text-[#8e96a3] text-sm font-medium">Order Number</p>
        <p className="text-[#05365c] font-semibold ml-auto">1266201</p>
      </li>
      <li className="mb-[18px] flex">
        <p className="text-[#8e96a3] text-sm font-medium">Product</p>
        <p className="text-[#05365c] font-semibold ml-auto">Macbook Air</p>
      </li>
      <li className="mb-[18px] flex">
        <p className="text-[#8e96a3] text-sm font-medium">VAT (20%)</p>
        <p className="text-[#05365c] font-semibold ml-auto">$100.00</p>
      </li>
    </ul>
  );
};

export default ProductDetails;
