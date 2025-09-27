export async function fetchNewsletterEmails() {
  const response = await fetch("http://localhost:3333/newsletter");

  if (!response.ok) {
    throw new Error("Failed to fetch the newsletter emails.");
  }

  return response.json();
}
