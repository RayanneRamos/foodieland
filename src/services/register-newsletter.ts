export async function registerNewsletter(email: string) {
  const response = await fetch("http://localhost:3333/register-newsletter", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });

  if (!response.ok) {
    throw new Error("Unable to register email");
  }

  return response.json();
}
