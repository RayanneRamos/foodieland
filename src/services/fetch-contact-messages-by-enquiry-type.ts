export async function fetchContactMessagesByEnquiryType(enquiryType: string) {
  const response = await fetch(
    `http://localhost:3333/messages/${encodeURIComponent(enquiryType)}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch contact messages by enquiry type");
  }

  return response.json();
}
