import { RecipeProps } from "../types";

export async function createRecipe(payload: RecipeProps) {
  const response = await fetch("http://localhost:3333/create-recipe", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("Unable to create recipe");
  }

  return response.json();
}
