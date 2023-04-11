import useAppStore from "../../state/appStore";
import { Product } from "../../types";

const ProductDetails = ({ product }: { product: Product }) => {
  const appState = useAppStore();
  const { setCart, cart } = appState;

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
    <div className="w-ful lg:w-1/2 flex  flex-col justify-start pr-20 items-start">
      <h1 className="text-3xl w-full font-bold p-2 ">{product.title}</h1>
      <div className="my-4  mx-2">
        <span className="font-medium"> Product category: </span>
        <span className="px-1 bg-indigo-500 rounded text-white font-medium">
          {product.category}{" "}
        </span>
      </div>
      <div className="my-4  mx-2">
        <span className="font-medium">Product Description:</span>
        <p className="leading-6">
          {product.description}+ Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Accusamus optio deleniti at eaque, dignissimos ut
          omnis aliquid nisi mollitia eligendi a accusantium blanditiis voluptas
          nam cumque, praesentium obcaecati minus possimus fugit. Corporis
          cupiditate explicabo autem minima incidunt saepe fugiat? Eligendi!
        </p>
      </div>
      <div className="w-full flex justify-between items-center">
        <div className=" mx-2 my-4">
          <span className="font-medium">Discount on this product:</span>
          <span className="font-medium bg-yellow-200 text-yellow-800 p-2">
            -{product.discountPercentage} %{" "}
          </span>
        </div>
        <span className="p-2 bg-green-100 text-green-600 font-medium">
          In stock: {product.stock}{" "}
        </span>
      </div>

      <div className="my-4 mx-2">
        <sup className="text-lg">$</sup>
        <span className="font-bold text-3xl">{product.price}</span>
      </div>
      <div className="w-full flex justify-center items-center space-x-3">
        <button
          onClick={() => addToCart(1, product)}
          className=" bg-black w-1/2 text-white font-medium p-2 hover:bg-gray-700 transition delay-100 ease-in-out"
        >
          Add To Cart
        </button>
        <button
          onClick={() => addToCart(1, product)}
          className=" bg-indigo-500 w-1/2 text-white font-medium p-2 hover:bg-indigo-600 transition delay-100 ease-in-out"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
