import { CategoriesProps } from "../types";

export async function fetchCategories(): Promise<CategoriesProps[]> {
  const response = await fetch("http://localhost:3333/categories");

  if (!response.ok) {
    throw new Error("Error fetching categories");
  }

  return response.json();
}
