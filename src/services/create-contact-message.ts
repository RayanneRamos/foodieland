import { ContactMessageProps, ContactMessageResponse } from "../types";

export async function createContactMessage(
  data: ContactMessageProps
): Promise<ContactMessageResponse> {
  const response = await fetch("http://localhost:3333/create-message", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify([data]),
  });

  if (!response.ok) {
    throw new Error("Unable to send contact message");
  }

  return response.json();
}
