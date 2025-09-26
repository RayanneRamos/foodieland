import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Recipes } from ".";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

vi.mock("../../components/navigation", () => ({
  Navigation: () => <nav data-testid="navigation">Navigation</nav>,
}));

vi.mock("../../components/divider", () => ({
  Divider: () => <div data-testid="divider" />,
}));

vi.mock("../../components/card-other-recipes", () => ({
  CardOtherRecipes: ({ moreRecipe }: any) => (
    <div data-testid="recipe-card">{moreRecipe.recipeName}</div>
  ),
}));

vi.mock("../../components/pagination", () => ({
  Pagination: ({ onPageChange }: any) => (
    <button onClick={() => onPageChange(2)} data-testid="pagination-button">
      Next
    </button>
  ),
}));

vi.mock("../../components/newsletter", () => ({
  Newsletter: () => <div data-testid="newsletter">Newsletter</div>,
}));

vi.mock("../../components/footer", () => ({
  Footer: () => <footer data-testid="footer">Footer</footer>,
}));

vi.mock("../../utils/recipes", () => ({
  recipes: Array.from({ length: 25 }, (_, i) => ({
    id: `${i + 1}`,
    recipeName: `Recipe ${i + 1}`,
  })),
}));

vi.mock("../../services/fetch-recipes", () => ({
  fetchRecipes: vi.fn().mockResolvedValue(
    Array.from({ length: 24 }, (_, i) => ({
      id: `${i + 1}`,
      recipeName: `Recipe ${i + 1}`,
    }))
  ),
}));

const queryClient = new QueryClient();

describe("Recipes", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <QueryClientProvider client={queryClient}>
          <Recipes />
        </QueryClientProvider>
      </MemoryRouter>
    );
  });

  it("should render navigation", () => {
    expect(screen.getByTestId("navigation")).toBeInTheDocument();
  });

  it("should render divider", () => {
    expect(screen.getByTestId("divider")).toBeInTheDocument();
  });

  it("should render the title 'Recipes Lists'", () => {
    expect(screen.getByText("Recipes Lists")).toBeInTheDocument();
  });

  it("should display 12 recipes on the first page", async () => {
    await waitFor(() => {
      const recipeCards = screen.getAllByTestId("recipe-card");
      expect(recipeCards).toHaveLength(12);
      expect(recipeCards[0]).toHaveTextContent("Recipe 1");
      expect(recipeCards[11]).toHaveTextContent("Recipe 12");
    });
  });

  it("should navigate to the next page and display the corresponding recipes", async () => {
    await waitFor(() => {
      expect(screen.getAllByTestId("recipe-card")).toHaveLength(12);
    });

    fireEvent.click(screen.getByText("Next"));

    await waitFor(() => {
      const recipeCards = screen.getAllByTestId("recipe-card");
      expect(recipeCards[0]).toHaveTextContent("Recipe 13");
      expect(recipeCards).toHaveLength(12);
    });
  });

  it("should render the Newsletter and Footer components", () => {
    expect(screen.getByTestId("newsletter")).toBeInTheDocument();
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });
});
