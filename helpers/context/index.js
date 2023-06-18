import { createContext } from "react";

export const Context = createContext({
  ProductsDatas: [],
  productsListCategories: [],
  handlePagination: () => {},
});
