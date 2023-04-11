import { AiFillCloseSquare, AiFillDelete } from "react-icons/ai";
import useAppStore from "../../state/appStore";

const CartDetailsPopUp = () => {
  const appState = useAppStore();
  const cart = appState.cart;
  const showCartDetails = appState.showCartDetails;
  const setShowCartDetails = appState.setShowCartDetails;
  const setCart = appState.setCart;
  const quantity = cart.reduce((acc, curr) => acc + curr.quantity, 0) || 0;
  const total = cart.reduce(
    (acc, curr) => acc + curr.product.price * curr.quantity,
    0
  );

  const deleteFromCart = (id: number) => {
    setCart(cart?.filter((item) => item.product.id !== id));
  };
  return (
    <div
      className={
        showCartDetails
          ? "sliderPopUp bg-gray-100 w-full  right-0 top-24 lg:top-16 lg:right-5 lg:w-1/3 "
          : " slideOutPopUp  "
      }
    >
      <div className="w-full flex justify-between items-center mb-4 border-b p-2  ">
        <span className="flex-grow text-center font-medium">
          You have {quantity} {quantity <= 1 ? "item" : "items"} in your cart.
        </span>

        <AiFillCloseSquare
          onClick={() => setShowCartDetails()}
          className="text-2xl  text-red-500 cursor-pointer  "
        />
      </div>

      {cart &&
        cart.length > 0 &&
        cart.map((item) => {
          return (
            <div
              key={item.product.id}
              className="w-full flex justify-start items-center space-x-4 p-2 border-b"
            >
              <span>
                <img src={item.product.thumbnail} width={30} height={30} />
              </span>
              <span className="text-sm flex-grow">{item.product.title}</span>
              <span className="font-medium">{item.quantity} pcs</span>
              <span className="font-medium">
                <sup>$</sup>
                {item.product.price * item.quantity}
              </span>
              <AiFillDelete
                onClick={() => deleteFromCart(item.product.id)}
                className="text-red-500 hover:text-red-600 cursor-pointer"
              />
            </div>
          );
        })}
      {cart.length > 0 && (
        <>
          <div className="w-full p-2 flex justify-end items-center space-x-4">
            <h2 className="text-2xl font-medium">Total:</h2>

            <span className="font-bold text-2xl">
              <sup>$</sup>
              {total}
            </span>
          </div>
          <div className="border-t w-full p-2 flex justify-evenly  items-center">
            <button className="p-2 bg-yellow-500 hover:bg-yellow-400 font-medium transition delay-100 ease-in-out  text-gray-800">
              Proceed to checkout
            </button>
            <button
              onClick={() => setShowCartDetails()}
              className="p-2 bg-indigo-600 hover:bg-indigo-500 transition delay-100 ease-in-out  font-medium text-gray-100"
            >
              continue shopping
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartDetailsPopUp;
