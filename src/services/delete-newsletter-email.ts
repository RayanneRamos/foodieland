export async function deleteNewsletterEmail(id: string) {
  const response = await fetch(
    `http://localhost:3333/delete-newsletter/${id}`,
    {
      method: "DELETE",
    }
  );

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Failed to delete newsletter email");
  }

  return response.json();
}
