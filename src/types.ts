export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

export type item = {
  product: Product;
  quantity: number;
};
export type appStateType = {
  products: Product[];
  cart?: item[];
  setProducts: (p: Product[]) => void;
  setCart: (i: item[]) => void;
};
