import { Link } from "react-router-dom";
import { Product } from "../../types";
import useAppStore from "../../state/appStore";

const ProductCard = ({ product }: { product: Product }) => {
  const appState = useAppStore();
  const { cart, setCart } = appState;
  const addToCart = (n: number, product: Product) => {
    const exists = cart?.find((item) => item.product.id === product.id);

    if (!exists) {
      setCart([...cart, { product, quantity: n }]);
    } else {
      setCart(
        cart?.map((item) => {
          if (item.product.id === product.id) {
            item.quantity += n;
            return item;
          }
          return item;
        })
      );
    }
  };
  return (
    <div
      className="relative flex flex-col justify-between items-start border p-2  "
      key={product.id}
    >
      <div className=" absolute w-12 h-12 rounded-full flex justify-center items-center bg-gray-700 -top-5 -left-5">
        <span className=" text-xs text-gray-200 font-bold">
          -{product.discountPercentage}%
        </span>
      </div>{" "}
      <Link to={"/products/" + product.id}>
        <img
          src={product.images[0]}
          className="hover:scale-150 transition delay-100 ease-in-out "
        />
      </Link>
      <span className="text-gray-600 font-medium">{product.title}</span>
      <div className="w-full flex justify-between items-center border-b">
        <span>${product.price}</span>
        <span>{product.rating}</span>
      </div>
      {product.stock > 20 && (
        <div className="w-full flex justify-between items-center mt-6">
          <button
            onClick={() => addToCart(1, product)}
            className="bg-black hover:bg-gray-700 text-gray-100 px-4 py-2 my-4"
          >
            Add To Cart
          </button>
          <button className="bg-indigo-500 hover:bg-gray-700 text-gray-100 px-4 py-2 my-4">
            Buy Now
          </button>
        </div>
      )}
      <div className=" flex   justify-center items-end font-medium my-4">
        {product.stock > 20 ? (
          <span className=" bg-green-100 text-xs text-green-500 p-1">
            In stock
          </span>
        ) : (
          <span className=" bg-red-100 text-red-500 p-2">Out of stock</span>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
