import { useEffect, useState } from "react";
import { Product } from "../../types";

const ProductImages = ({ product }: { product: Product }) => {
  const [currentImage, setCurrentImage] = useState("");
  const [slideIn, setSlideIn] = useState(false);
  useEffect(() => {
    if (product) {
      setCurrentImage(product.images[0]);
    }
  }, [product.id]);
  return (
    <div className="w-full lg:w-1/2 flex justify-between items-between border-b lg:border-r p-2">
      <div className="w-1/4 flex flex-col justify-center items-center ">
        {product.images.map((image) => {
          return (
            <div
              key={image}
              className="p-2 border cursor-pointer my-2 "
              onClick={() => {
                setCurrentImage(image);
                setSlideIn(true);
              }}
            >
              <img src={image} width={60} height={60} />
            </div>
          );
        })}
      </div>
      <div
        onAnimationEnd={() => {
          setSlideIn(false);
        }}
        className={
          slideIn
            ? "w-full  flex justify-center items-center currentImage  "
            : " w-full  flex justify-center items-center "
        }
      >
        <img
          src={currentImage}
          className={"transition delay-100 ease-in-out hover:scale-125 "}
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};

export default ProductImages;
