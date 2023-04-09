import { AiOutlineShoppingCart } from "react-icons/ai";

const Cart = () => {
  return (
    <div className="relative w-10 h-10 flex justify-center items-center cursor-pointer hover:bg-gray-100 transition-colors delay-100 ease-in-out">
      <AiOutlineShoppingCart className="text-3xl  text-gray-700" />
      <span className="absolute top-1 left-1 bg-black w-4 h-4 rounded-full text-white flex justify-center items-center">
        4
      </span>
    </div>
  );
};

export default Cart;
