import { render, screen, waitFor } from "@testing-library/react";
import { Contact } from ".";
import userEvent from "@testing-library/user-event";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createContactMessage } from "../../services/create-contact-message";

const queryClient = new QueryClient();

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

vi.mock("../../services/create-contact-message", () => ({
  createContactMessage: vi.fn(() => Promise.resolve({ success: true })),
}));

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
  useShuffleRecipes: () => ({
    shuffledRecipes: [
      [exampleMock, exampleMock, exampleMock, exampleMock],
      [exampleMock, exampleMock, exampleMock, exampleMock],
      [exampleMock, exampleMock, exampleMock, exampleMock],
      [exampleMock, exampleMock, exampleMock, exampleMock],
      [exampleMock, exampleMock, exampleMock, exampleMock],
      [exampleMock, exampleMock, exampleMock, exampleMock],
    ],
  }),
}));

vi.mock("sonner", () => ({
  toast: {
    success: vi.fn(),
  },
}));

describe("Contact", () => {
  beforeEach(() => {
    localStorage.clear();

    render(
      <QueryClientProvider client={queryClient}>
        <Contact />
      </QueryClientProvider>
    );
  });

  afterEach(() => {
    vi.clearAllMocks();
  });
  it("should render all components correctly", () => {
    expect(screen.getByTestId("navigation")).toBeInTheDocument();
    expect(screen.getByTestId("divider")).toBeInTheDocument();
    expect(screen.getByTestId("newsletter")).toBeInTheDocument();
    expect(screen.getByTestId("footer")).toBeInTheDocument();
    expect(screen.getAllByTestId("recipe-card")).toHaveLength(4);
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

    const nameInput = screen.getByPlaceholderText(/enter your name/i);
    await user.type(nameInput, "João Silva");

    const emailInput = screen.getByPlaceholderText(/your email address/i);
    await user.type(emailInput, "joao@example.com");

    const subjectInput = screen.getByPlaceholderText(/enter subject/i);
    await user.type(subjectInput, "Parceria");

    const enquirySelect = screen.getByRole("combobox");
    await user.selectOptions(enquirySelect, "advertising");

    const messageInput = screen.getByPlaceholderText(/enter your messages/i);
    await user.type(messageInput, "Gostaria de discutir uma parceria.");

    await user.click(screen.getByRole("button", { name: /submit/i }));

    await waitFor(() => {
      expect(createContactMessage).toHaveBeenCalled();
    });

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

    expect(nameInput).toHaveValue("");
    expect(emailInput).toHaveValue("");
    expect(subjectInput).toHaveValue("");
    expect(enquirySelect).toHaveValue("");
    expect(messageInput).toHaveValue("");
  });
});
