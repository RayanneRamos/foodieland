import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Home } from ".";
import userEvent from "@testing-library/user-event";

const mockNavigate = vi.fn();

const exampleMock = {
  id: "3e9757e5-3709-49ab-8c7b-a629f8880fca",
  recipeName: "Caprese Salad",
  author: {
    authorAvatar: "/authors/author-isaac-foster.jpeg",
    authorName: "Isaac Foster",
    authorDatePosted: "27 June 2021",
  },
  prepareTime: "10",
  cookTime: "0",
  recipeCategory: "Salad",
  categoryId: "9",
  recipeImage: "/recipes/salad/salad-image-04.png",
  recipeFavorite: true,
  nutritionInformation: {
    calories: "250",
    totalFat: "20",
    protein: "8",
    carbohydrate: "7",
    cholesterol: "25",
  },
  recipeDescription:
    "Caprese Salad is a simple yet elegant Italian dish that highlights fresh, high-quality ingredients. It features ripe, juicy tomatoes, creamy mozzarella cheese, and fragrant basil leaves, all drizzled with extra virgin olive oil and balsamic vinegar. A sprinkle of sea salt and freshly cracked black pepper enhances the flavors, making each bite a perfect balance of tangy, creamy, and herby notes. This light and refreshing salad is ideal as a starter, side dish, or even a light main course during warm weather. It’s a celebration of summer’s finest produce and flavors.",
  recipeIngredients: [
    {
      recipeSteps: {
        name: "For main dish",
        steps: [
          {
            ingredientsQuantity: "2",
            ingredientsName: "large tomatoes, sliced",
          },
          {
            ingredientsQuantity: "8",
            ingredientsName: "oz fresh mozzarella cheese, sliced",
          },
        ],
      },
    },
  ],
  recipeDirections: [
    {
      directionTitle: "Arrange the salad",
      directionDescription:
        "On a serving plate, alternate layers of tomato slices, mozzarella slices, and fresh basil leaves.",
    },
  ],
};

vi.mock("react-router", async () => {
  const actual = await vi.importActual("react-router");
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

vi.mock("../../hooks/useShuffleRecipes", () => ({
  useShuffleRecipes: () => [exampleMock],
}));

vi.mock("../../utils/categories", () => ({
  categories: Array.from({ length: 6 }, (_, index) => ({
    id: `category-${index + 1}`,
    name: `Category ${index + 1}`,
    image: `image-${index + 1}.png`,
  })),
}));

vi.mock("../../utils/recipes", () => ({
  recipes: [
    { id: 1, name: "Receita 1", image: "image1.png" },
    { id: 2, name: "Receita 2", image: "image2.png" },
    { id: 3, name: "Receita 3", image: "image3.png" },
    { id: 4, name: "Receita 4", image: "image4.png" },
    { id: 5, name: "Receita 5", image: "image5.png" },
    { id: 6, name: "Receita 6", image: "image6.png" },
    { id: 7, name: "Receita 7", image: "image7.png" },
    { id: 8, name: "Receita 8", image: "image8.png" },
  ],
}));

vi.mock("../../components/card-recipes", () => ({
  CardRecipes: () => <div data-testid="card-recipe">Mocked CardRecipe</div>,
}));

vi.mock("../../components/footer", () => ({
  Footer: () => <div data-testid="footer" />,
}));
vi.mock("../../components/newsletter", () => ({
  Newsletter: () => <div data-testid="newsletter" />,
}));

describe("Home", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
  });
  it("should render the main title", () => {
    const titulo = screen.getByRole("heading", {
      name: /spicy delicious chicken wings/i,
    });
    expect(titulo).toBeInTheDocument();
  });

  it("should render the 'View Recipes' button and navigate when clicked", async () => {
    const botao = screen.getByRole("button", { name: /view recipes/i });
    expect(botao).toBeInTheDocument();

    await userEvent.click(botao);
    expect(mockNavigate).toHaveBeenCalledWith("/recipes");
  });

  it("should render the categories section with 6 categories", () => {
    for (let i = 1; i <= 6; i++) {
      expect(screen.getByText(`Category ${i}`)).toBeInTheDocument();
    }
  });

  it("should render 8 recipes in the recipe section", () => {
    const recipeTitle = screen.getByRole("heading", {
      name: /Simple and tasty recipes/i,
    });
    expect(recipeTitle).toBeInTheDocument();

    const cards = screen.getAllByTestId("card-recipe");
    expect(cards).toHaveLength(1);
  });

  it("should render the chef's image", () => {
    const imagemChef = screen.getByAltText(/chef/i);
    expect(imagemChef).toBeInTheDocument();
  });

  it("should render the Instagram posts", () => {
    const posts = screen.getAllByAltText(/post-\d{2}/i);
    expect(posts.length).toBeGreaterThanOrEqual(4);
  });

  it("should render the Newsletter component", () => {
    const newsletter = screen.getByTestId("newsletter");
    expect(newsletter).toBeInTheDocument();
  });

  it("should render the Footer component", () => {
    const footer = screen.getByTestId("footer");
    expect(footer).toBeInTheDocument();
  });
});
