export async function fetchContactMessages() {
  const response = await fetch("http://localhost:3333/messages");

  if (!response.ok) {
    throw new Error("Failed to fetch contact messages");
  }

  return response.json();
}
