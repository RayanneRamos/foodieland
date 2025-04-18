import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { RecipeDetails } from ".";

vi.mock("react-router", async () => {
  const actual = await vi.importActual<typeof import("react-router")>(
    "react-router"
  );
  return {
    ...actual,
    useParams: () => ({ id: "1" }),
  };
});

vi.mock("../../components/navigation", () => ({
  Navigation: () => <nav data-testid="navigation">Navigation</nav>,
}));

vi.mock("../../components/divider", () => ({
  Divider: () => <div data-testid="divider" />,
}));

vi.mock("../../components/avatar", () => ({
  Avatar: ({ author }) => (
    <img src={author?.authorAvatar} alt={author?.authorName} />
  ),
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
    <div data-testid="ingredient-card">{othersRecipe.title}</div>
  ),
}));

vi.mock("../../components/directions-task", () => ({
  DirectionsTask: () => <div data-testid="directions-task" />,
}));

vi.mock("../../components/newsletter", () => ({
  Newsletter: () => <div data-testid="newsletter" />,
}));

vi.mock("../../components/card-other-recipes", () => ({
  CardOtherRecipes: ({ moreRecipe }: { moreRecipe: any }) => (
    <div data-testid="card-other-recipe">{moreRecipe.recipeName}</div>
  ),
}));

vi.mock("../../components/footer", () => ({
  Footer: () => <footer data-testid="footer">Footer</footer>,
}));

vi.mock("../../utils/recipes", () => ({
  recipes: [
    {
      id: "1",
      recipeName: "Delicious Pasta",
      author: {
        authorName: "Chef Mario",
        authorAvatar: "avatar.png",
      },
      prepareTime: "15 mins",
      cookTime: "30 mins",
      recipeCategory: "Italian",
      recipeImage: "pasta.png",
      nutritionInformation: {
        calories: "400 kcal",
        fatContent: "10g",
        proteinContent: "15g",
        carbohydrateContent: "50g",
      },
      recipeDescription: "A delightful pasta recipe.",
      recipeDirections: [
        {
          directionTitle: "Boil Water",
          directionDescription: "Bring water to a boil.",
        },
        {
          directionTitle: "Cook Pasta",
          directionDescription: "Add pasta and cook until al dente.",
        },
      ],
    },
  ],
}));

vi.mock("../../hooks/useShuffleRecipes", () => ({
  useShuffleRecipes: () => [
    {
      id: "2",
      recipeName: "Tasty Salad",
      recipeImage: "salad.png",
    },
    {
      id: "3",
      recipeName: "Grilled Chicken",
      recipeImage: "chicken.png",
    },
    {
      id: "4",
      recipeName: "Fruit Smoothie",
      recipeImage: "smoothie.png",
    },
    {
      id: "5",
      recipeName: "Chocolate Cake",
      recipeImage: "cake.png",
    },
  ],
}));

describe("Recipe Details", () => {
  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={["/recipe-details/1"]}>
        <Routes>
          <Route path="/recipe-details/:id" element={<RecipeDetails />} />
        </Routes>
      </MemoryRouter>
    );
  });
  it("should render navigation", () => {
    expect(screen.getByTestId("navigation")).toBeInTheDocument();
  });

  it("should render divider", () => {
    expect(screen.getByTestId("divider")).toBeInTheDocument();
  });

  it("should render the recipe title and description", async () => {
    await waitFor(() => {
      expect(screen.getByText("Delicious Pasta")).toBeInTheDocument();
    });

    expect(screen.getByText("A delightful pasta recipe.")).toBeInTheDocument();
  });

  it("should render the author's name and avatar", async () => {
    expect(
      screen.getByRole("img", { name: /chef mario/i })
    ).toBeInTheDocument();
  });

  it("should render vertical divider", () => {
    const dividers = screen.getAllByTestId("vertical-divider");
    expect(dividers).toHaveLength(3);
  });

  it("should render recipe info", () => {
    const recipesInfos = screen.getAllByTestId("recipe-info");
    expect(recipesInfos).toHaveLength(2);
  });

  it("should render label", () => {
    expect(screen.getByTestId("label")).toBeInTheDocument();
  });

  it("should render action button", () => {
    const actionsButtons = screen.getAllByTestId("action-button");
    expect(actionsButtons).toHaveLength(2);
  });

  it("should render nutrition table", () => {
    expect(screen.getByTestId("nutrition-information")).toBeInTheDocument();
  });

  it("should render task board", () => {
    expect(screen.getByTestId("task-board")).toBeInTheDocument();
  });

  it("should render direction task", () => {
    const directionsTasks = screen.getAllByTestId("directions-task");
    expect(directionsTasks).toHaveLength(2);
  });

  it("should render ingredients cards", () => {
    const ingredientsCards = screen.getAllByTestId("ingredient-card");
    expect(ingredientsCards).toHaveLength(3);
  });

  it("should render newsletter", () => {
    expect(screen.getByTestId("newsletter")).toBeInTheDocument();
  });

  it("should render 4 'You may like theses recipes too card'", async () => {
    const cards = await screen.findAllByTestId("card-other-recipe");
    expect(cards).toHaveLength(4);
  });

  it("should render the footer", async () => {
    expect(await screen.findByTestId("footer")).toBeInTheDocument();
  });
});
