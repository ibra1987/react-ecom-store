import useAppStore from "../state/appStore";
import getProducts from "../http/getProducts";
import { useEffect, useState } from "react";
import { appStateType } from "../types";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Hero from "../components/shared/Hero";
import ProductCard from "../components/products/ProductCard";

const HomePage = () => {
  const [limit, setLimit] = useState(20);
  const [skip, setSkip] = useState(20);
  const appState = useAppStore();
  const { products, setProducts, setCategories, categories }: appStateType =
    appState;
  const { isLoading, error, data } = useQuery("fetchProducts", async () => {
    if (!products.length) {
      await loadProducts(skip, limit);
      console.log(categories);

      if (isLoading) return "Please wait ...";
      if (error) return "An error occured";
    }
    return;
  });

  useEffect(() => {
    products?.map((product) => {
      if (!categories.includes(product.category)) {
        setCategories([...categories, product.category]);
      }
    });
  }, [products.length]);
  const loadProducts = async (skip: number, limit: number) => {
    try {
      const response = await getProducts(skip, limit);
      setProducts(response.products);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <>
      <Hero />
      <div className="w-11/12 grid grid-cols-fluid p-4 gap-20 my-10">
        {products && products.length > 0 ? (
          products.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })
        ) : (
          <div className="w-full text-center ">Nothing to show</div>
        )}
      </div>
    </>
  );
};

export default HomePage;
