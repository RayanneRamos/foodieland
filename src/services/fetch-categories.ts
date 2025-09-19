export type Categories = {
  id: string;
  categoryName: string;
  categoryImage: string;
  categoryId: string;
};

export async function fetchCategories(): Promise<Categories[]> {
  const response = await fetch("http://localhost:3333/categories");

  if (!response.ok) {
    throw new Error("Error fetching categories");
  }

  return response.json();
}
