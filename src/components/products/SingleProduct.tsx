import { Product } from "../../types";
import useAppStore from "../../state/appStore";
import ProductImages from "./ProductImages";
import ProductDetails from "./ProductDetails";

const SingleProduct = ({ product }: { product: Product }) => {
  return (
    <>
      {product && (
        <div className=" p-4 w-full flex flex-col lg:flex-row justify-between items-center md:items-start space-y-2 md:space-x-6 ">
          <ProductImages product={product} />
          <ProductDetails product={product} />
        </div>
      )}
    </>
  );
};

export default SingleProduct;
