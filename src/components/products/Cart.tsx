import { AiOutlineShoppingCart } from "react-icons/ai";
import useAppStore from "../../state/appStore";
const Cart = () => {
  const appState = useAppStore();
  const cart = appState.cart;
  const setCartShowDetails = appState.setShowCartDetails;
  const quantity = cart.reduce((acc, curr) => acc + curr.quantity, 0) || 0;
  return (
    <div
      onClick={() => setCartShowDetails()}
      className="flex justify-center items-center cursor-pointer hover:bg-gray-100 transition-colors delay-100 ease-in-out"
    >
      <AiOutlineShoppingCart className="text-3xl  text-gray-700" />

      {quantity && quantity > 0 ? (
        <span className="text-xs bg-black rounded text-white flex justify-center items-center p-1">
          {quantity}
        </span>
      ) : null}
    </div>
  );
};

export default Cart;
