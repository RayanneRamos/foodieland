import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { screen, render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { NotFound } from ".";

vi.mock("../../components/navigation", () => ({
  Navigation: () => <div data-testid="navigation" />,
}));

vi.mock("../../components/button", () => ({
  Button: ({ name }: { name: string }) => <button>{name}</button>,
}));

const queryClient = new QueryClient();

describe("Not Found", () => {
  beforeEach(() => {
    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <NotFound />
        </MemoryRouter>
      </QueryClientProvider>
    );
  });

  it("should render the navigation", () => {
    const navigation = screen.getByTestId("navigation");
    expect(navigation).toBeInTheDocument();
  });

  it("should render the not found image", () => {
    const image = screen.getByAltText("not found");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", expect.stringContaining("not-found"));
  });

  it("should render the title", () => {
    const title = screen.getByText("Oops! Recipe not found 🔍");
    expect(title).toBeInTheDocument();
  });

  it("should render the subtitle", () => {
    const subtitle = screen.getByText(
      "Look like you've wandered into the wrong kitchen. Return to the home page and discover new delicious recipes!"
    );
    expect(subtitle).toBeInTheDocument();
  });

  it("should render the back to home button", () => {
    const button = screen.getByRole("button", { name: /back to home/i });
    expect(button).toBeInTheDocument();
  });

  it("button should link to home page", () => {
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/");
  });
});
