import { create } from "zustand";
import { Item, appStateType, Product, Category } from "../types";

const useAppStore = create<appStateType>((set, get) => ({
  products: [],
  categories: [],
  cart: [],
  showCartDetails: false,

  setProducts: (payload: Product[]) =>
    set((state: { products: Product[] }) => ({
      products: [...state.products, ...payload],
    })),

  setCategories: (payload: Category[]) =>
    set((state) => ({
      categories: payload,
    })),

  setCart: (i: Item[]) =>
    set((state) => ({
      cart: i,
    })),
  setShowCartDetails: () =>
    set((state) => ({
      showCartDetails: !state.showCartDetails,
    })),
}));

export default useAppStore;
