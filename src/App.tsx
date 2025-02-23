import { Toaster } from "sonner";
import { Router } from "./router";

export function App() {
  return (
    <>
      <Toaster position="bottom-right" richColors />
      <Router />
    </>
  );
}
