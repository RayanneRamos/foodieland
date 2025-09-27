import { CategoriesProps } from "../types";

export async function createCategory(payload: CategoriesProps) {
  const response = await fetch("http://localhost:3333/create-category", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("Unable to create category");
  }

  return response.json();
}
