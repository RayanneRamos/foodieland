/* eslint-disable @typescript-eslint/no-explicit-any */
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { BlogList } from ".";
import { blog } from "../../utils/blog";

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
  Title: ({ children }: any) => <h1 data-testid="title">{children}</h1>,
}));

vi.mock("../../components/card-blog-posts", () => ({
  CardBlogPosts: ({ blog }: any) => (
    <div data-testid="blog-post">{blog.title}</div>
  ),
}));

vi.mock("../../components/search-card", () => ({
  CardSearchNews: ({ news }: any) => (
    <div data-testid="search-post">{news.title}</div>
  ),
}));

vi.mock("../../components/ingredients-cards", () => ({
  IngredientsCards: ({ othersRecipe }: any) => (
    <div data-testid="ingredient-card">{othersRecipe.title}</div>
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

vi.mock("../../hooks/useShuffleRecipes", () => ({
  useShuffleRecipes: () => [exampleMock],
}));
describe("Blog List", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <BlogList />
      </MemoryRouter>
    );
  });
  it("should render the navigation and footer", () => {
    expect(screen.getByTestId("navigation")).toBeInTheDocument();
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });

  it("should render the blog header", () => {
    expect(screen.getByTestId("title")).toHaveTextContent(/blog & article/i);
    expect(
      screen.getByPlaceholderText(/search title, news or recipe.../i)
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /search/i })).toBeInTheDocument();
  });

  it("should render a list of blog posts", () => {
    const blogPosts = screen.getAllByTestId("blog-post");
    expect(blogPosts.length).toBeGreaterThan(0);
  });

  it("should filter blog posts by search term", () => {
    const input = screen.getByPlaceholderText(
      /search title, news or recipe.../i
    );
    fireEvent.change(input, { target: { value: blog[0].title } });

    const searchResults = screen.getAllByTestId("search-post");
    expect(searchResults[0]).toHaveTextContent(blog[0].title);
  });

  it("should render tasty recipes cards", () => {
    const recipeCards = screen.getAllByTestId("ingredient-card");
    expect(recipeCards.length).toBe(1);
  });

  it("should paginate when clicking on pagination button", () => {
    const button = screen.getByTestId("pagination-button");
    fireEvent.click(button);

    const blogPosts = screen.getAllByTestId("blog-post");
    expect(blogPosts.length).toBeGreaterThan(0);
  });

  it("should render newsletter section", () => {
    expect(screen.getByTestId("newsletter")).toBeInTheDocument();
  });

  it("should render search button", () => {
    const searchButton = screen.getByRole("button", { name: /search/i });

    expect(searchButton).toBeInTheDocument();
  });
});
