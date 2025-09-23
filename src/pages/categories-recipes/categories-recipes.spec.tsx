/* eslint-disable @typescript-eslint/no-explicit-any */
import { render, screen } from "@testing-library/react";
import * as ReactRouter from "react-router";
import { categories } from "../../utils/categories";
import { CategoriesRecipes } from ".";
import { recipes } from "../../utils/recipes";
import { vi } from "vitest";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

vi.mock("react-router", async () => {
  const actual = await vi.importActual<typeof ReactRouter>("react-router");
  return {
    ...actual,
    useParams: vi.fn(),
  };
});

vi.mock("../../components/navigation", () => ({
  Navigation: () => <div data-testid="navigation" />,
}));

vi.mock("../../components/divider", () => ({
  Divider: () => <div data-testid="divider" />,
}));

vi.mock("../../components/footer", () => ({
  Footer: () => <div data-testid="footer" />,
}));

vi.mock("../../components/newsletter", () => ({
  Newsletter: () => <div data-testid="newsletter" />,
}));

vi.mock("../../components/card-other-recipes", () => ({
  CardOtherRecipes: ({ moreRecipe }: any) => (
    <div data-testid="recipe-card">{moreRecipe.title}</div>
  ),
}));

vi.mock("@tanstack/react-query", async () => {
  const actual = await vi.importActual("@tanstack/react-query");
  return {
    ...actual,
    useQuery: vi.fn((options: any) => {
      if (options.queryKey[0] === "categories") {
        return { data: categories, isLoading: false, isError: false };
      }
      if (options.queryKey[0] === "recipes") {
        return { data: recipes, isLoading: false, isError: false };
      }
      return { data: [], isLoading: false, isError: false };
    }),
  };
});

const queryClient = new QueryClient();

describe("Categories Recipes", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });
  it("should render title and filtered recipes correctly", () => {
    const categoryId = categories[0].id;
    //const categoryName = categories[0].name;

    (ReactRouter.useParams as vi.Mock).mockReturnValue({ categoryId });

    render(
      <QueryClientProvider client={queryClient}>
        <CategoriesRecipes />
      </QueryClientProvider>
    );

    expect(
      screen.getByRole("heading", { name: `Recipes` })
    ).toBeInTheDocument();

    const filtered = recipes.filter((r) => r.categoryId === categoryId);
    const cards = screen.getAllByTestId("recipe-card");
    expect(cards).toHaveLength(filtered.length);

    expect(screen.getByTestId("navigation")).toBeInTheDocument();
    expect(screen.getByTestId("divider")).toBeInTheDocument();
    expect(screen.getByTestId("newsletter")).toBeInTheDocument();
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });

  it("should render empty state if category not found", () => {
    (ReactRouter.useParams as vi.Mock).mockReturnValue({
      categoryId: "non-existing",
    });

    render(
      <QueryClientProvider client={queryClient}>
        <CategoriesRecipes />
      </QueryClientProvider>
    );

    expect(
      screen.getByRole("heading", { name: /recipes/i })
    ).toBeInTheDocument();
    expect(screen.queryAllByTestId("recipe-card")).toHaveLength(0);
  });
});
