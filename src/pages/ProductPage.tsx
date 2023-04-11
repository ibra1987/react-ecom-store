import SingleProduct from "../components/products/SingleProduct";
import { Product } from "../types";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { useEffect, useState } from "react";
import getProduct from "../http/getProduct";
const ProductPage = () => {
  const navigate = useNavigate();
  const params = useParams();

  const [product, setProduct] = useState<Product>();

  const { isLoading, data, error } = useQuery("fetchProduct", async () => {
    const productId = Number(params.id);

    if (!productId) {
      navigate("/");
    }
    const res = await getProduct(productId);

    if (res) {
      setProduct(res);
    }
    if (error) {
      return "error";
    }
    if (isLoading) {
      return "loading ...";
    }
  });

  return (
    <>
      <section className="p-6 w-full">
        {product && <SingleProduct product={product} />}
      </section>
    </>
  );
};

export default ProductPage;
