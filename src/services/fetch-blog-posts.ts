import { BlogProps } from "../types";

export async function fetchBlogPosts(): Promise<BlogProps[]> {
  const response = await fetch("http://localhost:3333/posts");

  if (!response.ok) {
    throw new Error("Error fetching posts");
  }

  return response.json();
}
