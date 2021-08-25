import React, { useState, createContext } from "react";
import { ICategory } from "../types";
import {categories as data} from "../mocks/categories"

export const CategoryContext = createContext<any>(null);

export const CategoryProvider: React.FC = (props) => {
  const [activeCategory, setCategory] = useState<string>("All");
  const [categories] = useState<ICategory[]>(data);

  return (
    <CategoryContext.Provider 
    value={{
      activeCategory,
      setCategory,
      categories
      }}>
      {props.children}
    </CategoryContext.Provider>
  );
};
