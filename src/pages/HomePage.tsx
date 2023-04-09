import useAppStore from "../state/appStore";
import getProducts from "../http/getProducts";
import { useEffect, useState } from "react";
import { appStateType } from "../types";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [limit, setLimit] = useState(20);
  const [skip, setSkip] = useState(20);
  const appState = useAppStore();
  const { products, setProducts }: appStateType = appState;
  const { isLoading, error, data } = useQuery("fetchProducts", async () => {
    if (!products.length) {
      await loadProducts(skip, limit);

      if (isLoading) return "Please wait ...";
      if (error) return "An error occured";
    }
    return;
  });

  const loadProducts = async (skip: number, limit: number) => {
    try {
      const response = await getProducts(skip, limit);
      setProducts(response.products);
    } catch (error: any) {
      console.log(error.message);
    }
  };
  console.log(products);

  return (
    <>
      {products.length > 0 && (
        <div className="w-11/12  mt-10 flex flex-col justify-between bg-indigo-600 items-center p-6 md:p-20 border">
          <div className="w-full ">
            <h1 className="text-4xl w-full text-center font-extrabold text-white">
              The Lowest Prices On The Market
            </h1>
            <p className="w-11/12 md:w-3/5 mx-auto p-4 text-gray-400">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
              alias voluptatibus veritatis animi sapiente reiciendis. Cupiditate
              minus quae porro excepturi?
            </p>
          </div>
          <button className="px-4 bg-yellow-400 hover:bg-yellow-500  tracking-widest font-medium text-xl py-2">
            Start Browsing
          </button>
        </div>
      )}
      <div className="w-11/12 grid grid-cols-fluid p-4 gap-20">
        {products &&
          products.length &&
          products.map((product) => {
            return (
              <>
                <div
                  className="flex flex-col justify-between items-start border p-2  "
                  key={product.id}
                >
                  <Link to={"/products/" + product.id}>
                    <img
                      src={product.images[0]}
                      className="hover:scale-150 transition delay-100 ease-in-out "
                    />
                  </Link>
                  <span className="text-gray-600 font-medium">
                    {product.title}
                  </span>
                  <div className="w-full flex justify-between items-center">
                    <span>${product.price}</span>
                    <span>{product.rating}</span>
                  </div>
                  <button className="bg-black text-gray-100 px-4 py-2 mt-10">
                    Buy Now
                  </button>
                </div>
              </>
            );
          })}
      </div>
    </>
  );
};

export default HomePage;
