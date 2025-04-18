import { render, screen, waitFor } from "@testing-library/react";
import { Contact } from ".";
import userEvent from "@testing-library/user-event";

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

vi.mock("../../hooks/useShuffleRecipes", () => ({
  useShuffleRecipes: () => [exampleMock],
}));

vi.mock("sonner", () => ({
  toast: {
    success: vi.fn(),
  },
}));

describe("Contact", () => {
  beforeEach(() => {
    localStorage.clear();

    render(<Contact />);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });
  it("should render all components correctly", () => {
    expect(screen.getByTestId("navigation")).toBeInTheDocument();
    expect(screen.getByTestId("divider")).toBeInTheDocument();
    expect(screen.getByTestId("newsletter")).toBeInTheDocument();
    expect(screen.getByTestId("footer")).toBeInTheDocument();
    expect(screen.getAllByTestId("recipe-card")).toHaveLength(1);
    expect(screen.getByText(/contact us/i)).toBeInTheDocument();
  });

  it("should display error messages when submiting and empty from", async () => {
    const user = userEvent.setup();

    await user.click(screen.getByRole("button", { name: /submit/i }));

    await waitFor(() => {
      expect(
        screen.getByText(/the name field cannot be blank/i)
      ).toBeInTheDocument();
      expect(
        screen.getByText(/the e-mail field is invalid/i)
      ).toBeInTheDocument();
      expect(
        screen.getByText(/the subject field cannot be blank/i)
      ).toBeInTheDocument();
      expect(
        screen.getByText(/you need to select option/i)
      ).toBeInTheDocument();
      expect(
        screen.getByText(/the message field must contain 12 characters/i)
      ).toBeInTheDocument();
    });
  });

  it("should submit the form with valid data and display a success message", async () => {
    const user = userEvent.setup();

    await user.type(
      screen.getByPlaceholderText(/enter your name/i),
      "João Silva"
    );
    await user.type(
      screen.getByPlaceholderText(/your email address/i),
      "joao@example.com"
    );
    await user.type(screen.getByPlaceholderText(/enter subject/i), "Parceria");
    await user.selectOptions(screen.getByRole("combobox"), "advertising");
    await user.type(
      screen.getByPlaceholderText(/enter your messages/i),
      "Gostaria de discutir uma parceria."
    );

    await user.click(screen.getByRole("button", { name: /submit/i }));

    await waitFor(() => {
      expect(
        screen.queryByText(/the name field cannot be blank/i)
      ).not.toBeInTheDocument();
      expect(
        screen.queryByText(/the e-mail field is invalid/i)
      ).not.toBeInTheDocument();
      expect(
        screen.queryByText(/the subject field cannot be blank/i)
      ).not.toBeInTheDocument();
      expect(
        screen.queryByText(/you need to select option/i)
      ).not.toBeInTheDocument();
      expect(
        screen.queryByText(/the message field must contain 12 characters/i)
      ).not.toBeInTheDocument();
    });

    expect(screen.getByPlaceholderText(/enter your name/i)).toHaveValue("");
    expect(screen.getByPlaceholderText(/your email address/i)).toHaveValue("");
    expect(screen.getByPlaceholderText(/enter subject/i)).toHaveValue("");
    expect(screen.getByRole("combobox")).toHaveValue("");
    expect(screen.getByPlaceholderText(/enter your messages/i)).toHaveValue("");
  });
});
