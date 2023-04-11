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

export type Item = {
  product: Product;
  quantity: number;
};
export type appStateType = {
  products: Product[];
  categories: Category[];
  cart: Item[];
  currentProducts?: Product[] | [];
  showCartDetails: boolean;
  setProducts: (p: Product[]) => void;
  setCart: (i: Item[]) => void;
  setCategories: (c: Category[]) => void;
  setShowCartDetails: () => void;
};

export type Category = string;
