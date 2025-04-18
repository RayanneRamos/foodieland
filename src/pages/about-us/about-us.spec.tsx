import { render, screen } from "@testing-library/react";
import { ReactNode } from "react";
import { useShuffleRecipes } from "../../hooks/useShuffleRecipes";
import { AboutUs } from ".";
import { MemoryRouter } from "react-router-dom";

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

vi.mock("../../components/navigation", () => ({
  Navigation: () => <nav data-testid="navigation">Navigation</nav>,
}));

vi.mock("../../components/divider", () => ({
  Divider: () => <div data-testid="divider" />,
}));

vi.mock("../../components/title", () => ({
  Title: ({ children }: { children: ReactNode }) => <h1>{children}</h1>,
}));

vi.mock("../../components/newsletter", () => ({
  Newsletter: () => <div data-testid="newsletter" />,
}));

vi.mock("../../components/card-other-recipes", () => ({
  CardOtherRecipes: () => <div data-testid="card-other-recipes" />,
}));

vi.mock("../../hooks/useShuffleRecipes");

vi.mock("../../components/footer", () => ({
  Footer: () => <div data-testid="footer" />,
}));

describe("About Us", () => {
  beforeEach(() => {
    vi.mocked(useShuffleRecipes).mockReturnValue([exampleMock]);

    render(
      <MemoryRouter>
        <AboutUs />
      </MemoryRouter>
    );
  });

  it("should render the page with navigation and footer", () => {
    expect(screen.getByTestId("navigation")).toBeInTheDocument();
    expect(screen.getByTestId("divider")).toBeInTheDocument();
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });

  it("should render the title About us", () => {
    expect(screen.getByText(/About us/i)).toBeInTheDocument();
  });

  it("should display the main paragraph about Foodieland", () => {
    expect(
      screen.getByText(/your ultimate destination for discovering/i)
    ).toBeInTheDocument();
  });

  it("should render the section 'Meet Our Chefs'", () => {
    expect(screen.getByText(/meet our chefs/i)).toBeInTheDocument();
    expect(
      screen.getByText(/crafted by a diverse team of professional chefs/i)
    );
  });

  it("should render the section 'why choose foodieland?", () => {
    expect(screen.getByText(/why choose foodieland?/i)).toBeInTheDocument();
    expect(
      screen.getByText(/traditional classics to trendy new dishes/i)
    ).toBeInTheDocument();
  });

  it("should render the section newsletter", () => {
    expect(screen.getByTestId("newsletter")).toBeInTheDocument();
  });

  it("should render the card recipes", () => {
    expect(
      screen.getByText(/check out the delicious recipe/i)
    ).toBeInTheDocument();

    expect(screen.getByTestId("card-other-recipes")).toBeInTheDocument();
  });

  it("should call useShuffleRecipes hook", () => {
    expect(useShuffleRecipes).toHaveBeenCalled();
  });
});
