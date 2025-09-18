import { Toaster } from "sonner";
import { Router } from "./router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Toaster position="bottom-right" richColors />
      <Router />
    </QueryClientProvider>
  );
}
