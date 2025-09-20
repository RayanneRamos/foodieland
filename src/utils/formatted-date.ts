export function formattedDate(dateString?: string): string {
  if (!dateString) {
    return "15 March 2022";
  }

  const date = new Date(dateString);

  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(date);
}
