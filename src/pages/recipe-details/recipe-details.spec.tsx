import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { RecipeDetails } from ".";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { vi } from "vitest";

// Mock do useParams
vi.mock("react-router", async () => {
  const actual = await vi.importActual("react-router");
  return { ...actual, useParams: () => ({ id: "1" }) };
});

// Mocks dos componentes usados
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
vi.mock("../../components/avatar", () => ({
  Avatar: () => <div data-testid="avatar" />,
}));
vi.mock("../../components/vertical-divider", () => ({
  VerticalDivider: () => <div data-testid="vertical-divider" />,
}));
vi.mock("../../components/recipe-info", () => ({
  RecipeInfo: () => <div data-testid="recipe-info" />,
}));
vi.mock("../../components/label", () => ({
  Label: () => <div data-testid="label" />,
}));
vi.mock("../../components/action-button", () => ({
  ActionButton: () => <div data-testid="action-button" />,
}));
vi.mock("../../components/nutrition-table", () => ({
  NutritionTable: () => <div data-testid="nutrition-information" />,
}));
vi.mock("../../components/task-board", () => ({
  TaskBoard: () => <div data-testid="task-board" />,
}));
vi.mock("../../components/ingredients-cards", () => ({
  IngredientsCards: ({ othersRecipe }: any) => (
    <div data-testid="ingredient-card">{othersRecipe.recipeName}</div>
  ),
}));
vi.mock("../../components/directions-task", () => ({
  DirectionsTask: () => <div data-testid="directions-task" />,
}));
vi.mock("../../components/card-other-recipes", () => ({
  CardOtherRecipes: ({ moreRecipe }: any) => (
    <div data-testid="card-other-recipe">{moreRecipe.recipeName}</div>
  ),
}));

// Mock do useQuery
vi.mock("@tanstack/react-query", async () => {
  const actual = await vi.importActual("@tanstack/react-query");
  return {
    ...actual,
    useQuery: () => ({
      data: [
        {
          id: "1",
          recipeName: "Delicious Pasta",
          author: { authorName: "Chef Mario", authorAvatar: "avatar.png" },
          prepareTime: "15 mins",
          cookTime: "30 mins",
          recipeCategory: "Italian",
          recipeImage: "/pasta.png",
          recipeDescription: "A delightful pasta recipe.",
          recipeDirection: [
            {
              directionTitle: "Boil Water",
              directionDescription: "Bring water to a boil.",
            },
            {
              directionTitle: "Cook Pasta",
              directionDescription: "Add pasta and cook until al dente.",
            },
          ],
          recipeNutrition: {
            calories: "400 kcal",
            fatContent: "10g",
            proteinContent: "15g",
            carbohydrateContent: "50g",
          },
        },
      ],
      isLoading: false,
    }),
  };
});

// Mock do useShuffleRecipes
vi.mock("../../hooks/useShuffleRecipes", () => ({
  useShuffleRecipes: () => ({
    shuffledRecipes: [
      [],
      [],
      [],
      [],
      [],
      [],
      [
        { id: "2", recipeName: "Tasty Salad" },
        { id: "3", recipeName: "Grilled Chicken" },
        { id: "4", recipeName: "Fruit Smoothie" },
      ],
      [
        { id: "5", recipeName: "Chocolate Cake" },
        { id: "6", recipeName: "Pancakes" },
        { id: "7", recipeName: "Burger" },
        { id: "8", recipeName: "Soup" },
      ],
    ],
    isLoading: false,
  }),
}));

describe("RecipeDetails Page", () => {
  let queryClient: QueryClient;

  beforeEach(() => {
    queryClient = new QueryClient({
      defaultOptions: { queries: { retry: false } },
    });

    render(
      <MemoryRouter initialEntries={["/recipe-details/1"]}>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path="/recipe-details/:id" element={<RecipeDetails />} />
          </Routes>
        </QueryClientProvider>
      </MemoryRouter>
    );
  });

  it("renders navigation, divider, footer and newsletter", () => {
    expect(screen.getByTestId("navigation")).toBeInTheDocument();
    expect(screen.getByTestId("divider")).toBeInTheDocument();
    expect(screen.getByTestId("newsletter")).toBeInTheDocument();
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });

  it("renders recipe title, description and avatar", () => {
    expect(screen.getByText("Delicious Pasta")).toBeInTheDocument();
    expect(screen.getByText("A delightful pasta recipe.")).toBeInTheDocument();
    expect(screen.getByTestId("avatar")).toBeInTheDocument();
  });

  it("renders vertical dividers, recipe info, labels and action buttons", () => {
    expect(screen.getAllByTestId("vertical-divider")).toHaveLength(3);
    expect(screen.getAllByTestId("recipe-info")).toHaveLength(2);
    expect(screen.getByTestId("label")).toBeInTheDocument();
    expect(screen.getAllByTestId("action-button")).toHaveLength(2);
  });

  it("renders nutrition table and task board", () => {
    expect(screen.getByTestId("nutrition-information")).toBeInTheDocument();
    expect(screen.getByTestId("task-board")).toBeInTheDocument();
  });

  it("renders directions tasks", () => {
    expect(screen.getAllByTestId("directions-task")).toHaveLength(2);
  });

  it("renders ingredients cards", () => {
    expect(screen.getAllByTestId("ingredient-card")).toHaveLength(3);
  });

  it("renders other recipe cards", () => {
    const cards = screen.getAllByTestId("card-other-recipe");
    expect(cards).toHaveLength(4);
  });
});
