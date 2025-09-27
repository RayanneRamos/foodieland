import { BlogProps } from "../types";

export async function createBlogPost(payload: BlogProps) {
  const response = await fetch("http://localhost:3333/create-post", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("Unable to create blog post");
  }

  return response.json();
}
