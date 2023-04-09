import { create } from "zustand";
import { Product } from "../types";
import { item } from "../types";
import { appStateType } from "../types";
import { stat } from "fs";

const useAppStore = create<appStateType>((set) => ({
  products: [],
  cart: [],

  setProducts: (payload: Product[]) =>
    set((state: { products: Product[] }) => ({
      products: [...state.products, ...payload],
    })),

  setCart: (i: item[]) =>
    set((state) => ({
      cart: i,
    })),
}));

export default useAppStore;
