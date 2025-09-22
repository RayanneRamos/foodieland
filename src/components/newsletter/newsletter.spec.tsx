import { describe, it, expect } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { toast } from "sonner";
import { Newsletter } from ".";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

vi.mock("sonner", () => ({
  toast: {
    success: vi.fn(),
    error: vi.fn(),
  },
}));

vi.mock("../../services/register-newsletter", () => ({
  registerNewsletter: vi.fn((email: string) => {
    if (email === "test@example.com") {
      return Promise.reject(new Error("E-mail already registered!"));
    }

    return Promise.resolve();
  }),
}));

describe("Newsletter", () => {
  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
  });

  const queryClient = new QueryClient();

  it("should render the title and subtitle", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Newsletter />
      </QueryClientProvider>
    );

    expect(
      screen.getByText(/deliciousness to your inbox/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/lorem ipsum/i)).toBeInTheDocument();
  });

  it("should register a valid email", async () => {
    const existingEmail = "test@example.com";
    localStorage.setItem("newsletterEmails", JSON.stringify([existingEmail]));

    render(
      <QueryClientProvider client={queryClient}>
        <Newsletter />
      </QueryClientProvider>
    );

    const input = screen.getByPlaceholderText(/your email address/i);
    const button = screen.getByRole("button", { name: /subscribe/i });

    fireEvent.change(input, { target: { value: "teste@example.com" } });
    fireEvent.click(button);

    await waitFor(() => {
      expect(toast.success).toHaveBeenCalledWith(
        expect.stringMatching(/e-mail registered successfully!/i)
      );
    });

    const storedEmails = JSON.parse(
      localStorage.getItem("newsletterEmails") || "{}"
    );
    expect(storedEmails).toContain("test@example.com");
  });

  it("should show error for invalid email", async () => {
    const existingEmail = "test@example.com";
    localStorage.setItem("newsletterEmails", JSON.stringify([existingEmail]));

    render(
      <QueryClientProvider client={queryClient}>
        <Newsletter />
      </QueryClientProvider>
    );

    const input = screen.getByPlaceholderText(/your email address/i);
    const button = screen.getByRole("button", { name: /subscribe/i });

    fireEvent.change(input, { target: { value: "invalidemail" } });
    fireEvent.click(button);

    await waitFor(() => {
      expect(
        screen.getByText(/the e-mail field is invalid/i)
      ).toBeInTheDocument();
    });

    const storedEmails = JSON.parse(
      localStorage.getItem("newsletterEmails") || "{}"
    );
    expect(storedEmails).toContain("test@example.com");
  });

  it("should show error if email is already registered", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Newsletter />
      </QueryClientProvider>
    );

    const input = screen.getByPlaceholderText(/your email address/i);
    const button = screen.getByRole("button", { name: /subscribe/i });

    fireEvent.change(input, { target: { value: "test@example.com" } });
    fireEvent.click(button);

    await waitFor(() => {
      expect(toast.error).toHaveBeenCalledWith(
        expect.stringMatching(/unable to register e-mail/i)
      );
    });
  });

  it("should show error if email is empty after triming", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Newsletter />
      </QueryClientProvider>
    );

    const input = screen.getByPlaceholderText(/your email address/i);
    const button = screen.getByRole("button", { name: /subscribe/i });

    fireEvent.change(input, { target: { value: "   " } });
    fireEvent.click(button);

    await waitFor(() => {
      const errorMessage = screen.getByText(/the e-mail field is invalid./i);
      expect(errorMessage).toBeInTheDocument();
    });
  });
});
