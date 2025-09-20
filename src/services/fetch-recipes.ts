import { RecipeProps } from "../types";

export async function fetchRecipes(): Promise<RecipeProps[]> {
  const response = await fetch("http://localhost:3333/recipes");

  if (!response.ok) {
    throw new Error("Error fetching recipes");
  }

  return response.json();
}
