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

vi.mock("../../components/footer", () => ({
  Footer: () => <footer data-testid="footer">Footer</footer>,
}));

vi.mock("../../components/card-other-recipes", () => ({
  CardOtherRecipes: ({ moreRecipe }: { moreRecipe: any }) => (
    <div data-testid="card-other-recipe">{moreRecipe.recipeName}</div>
  ),
}));

vi.mock("../../components/avatar", () => ({
  Avatar: ({ author }) => (
    <img src={author?.authorAvatar} alt={author?.authorName} />
  ),
}));

describe("Recipe Details", () => {
  it("should render the recipe title and description", async () => {
    render(
      <MemoryRouter initialEntries={["/recipe-details/1"]}>
        <Routes>
          <Route path="/recipe-details/:id" element={<RecipeDetails />} />
        </Routes>
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText("Delicious Pasta")).toBeInTheDocument();
    });

    expect(screen.getByText("A delightful pasta recipe.")).toBeInTheDocument();
  });

  it("should render the author's name and avatar", async () => {
    render(
      <MemoryRouter initialEntries={["/recipe-details/1"]}>
        <Routes>
          <Route path="/recipe-details/:id" element={<RecipeDetails />} />
        </Routes>
      </MemoryRouter>
    );

    expect(
      screen.getByRole("img", { name: /chef mario/i })
    ).toBeInTheDocument();
  });

  it("should render 4 'You may like theses recipes too card'", async () => {
    render(
      <MemoryRouter initialEntries={["/recipe-details/1"]}>
        <Routes>
          <Route path="/recipe-details/:id" element={<RecipeDetails />} />
        </Routes>
      </MemoryRouter>
    );

    const cards = await screen.findAllByTestId("card-other-recipe");
    expect(cards).toHaveLength(4);
  });

  it("should render the footer", async () => {
    render(
      <MemoryRouter initialEntries={["/recipe-details/1"]}>
        <Routes>
          <Route path="/recipe-details/:id" element={<RecipeDetails />} />
        </Routes>
      </MemoryRouter>
    );

    expect(await screen.findByTestId("footer")).toBeInTheDocument();
  });
});
