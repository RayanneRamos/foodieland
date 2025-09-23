import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Categories } from ".";
import userEvent from "@testing-library/user-event";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import * as fetchModule from "../../services/fetch-categories";

const mockedUseNavigate = vi.fn();

const mockedCategories = [
  {
    id: "1",
    categoryId: "1",
    categoryName: "Fruits",
    categoryImage: "/images/fruits.jpg",
  },
  {
    id: "2",
    categoryId: "2",
    categoryName: "Vegetables",
    categoryImage: "/images/vegetables.jpg",
  },
];

vi.mock("react-router", async () => {
  const actual = await vi.importActual<typeof import("react-router")>(
    "react-router"
  );
  return {
    ...actual,
    useNavigate: () => mockedUseNavigate,
  };
});

vi.mock("react-router", async () => {
  const actual = await vi.importActual<typeof import("react-router")>(
    "react-router"
  );
  return {
    ...actual,
    useNavigate: () => mockedUseNavigate,
  };
});

vi.mock("../../components/navigation", () => ({
  Navigation: () => <nav data-testid="navigation">Navigation</nav>,
}));

vi.mock("../../components/divider", () => ({
  Divider: () => <div data-testid="divider" />,
}));

vi.mock("../../components/newsletter", () => ({
  Newsletter: () => <div data-testid="newsletter" />,
}));

vi.mock("../../components/footer", () => ({
  Footer: () => <div data-testid="footer" />,
}));

const queryClient = new QueryClient();

vi.mock("@tanstack/react-query", async () => {
  const actual = await vi.importActual("@tanstack/react-query");
  return {
    ...actual,
    useQuery: vi.fn((options: any) => {
      if (options.queryKey[0] === "categories") {
        return { data: mockedCategories, isLoading: false, isError: false };
      }
      return { data: [], isLoading: false, isError: false };
    }),
  };
});

describe("Categories", () => {
  beforeEach(() => {
    vi.spyOn(fetchModule, "fetchCategories").mockResolvedValue(
      mockedCategories
    );
  });

  afterEach(() => {
    vi.restoreAllMocks();
    queryClient.clear();
  });
  it("should render the title Categories", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <Categories />
        </MemoryRouter>
      </QueryClientProvider>
    );

    expect(screen.getByText("Categories")).toBeInTheDocument();
  });

  it("should render all categories", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <Categories />
        </MemoryRouter>
      </QueryClientProvider>
    );

    for (const category of mockedCategories) {
      const element = await screen.findByText(category.categoryName);
      expect(element).toBeInTheDocument();
    }
  });

  it("should navigate to the correct category when clicking on a category", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <Categories />
        </MemoryRouter>
      </QueryClientProvider>
    );

    const user = userEvent.setup();
    const firstCategory = mockedCategories[0];
    const categoryButton = screen.getByText(firstCategory.categoryName);
    await user.click(categoryButton);

    expect(mockedUseNavigate).toHaveBeenCalledWith(
      `/categories/${firstCategory.categoryId}`
    );
  });

  it("should render navigation", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <Categories />
        </MemoryRouter>
      </QueryClientProvider>
    );

    expect(screen.getByTestId("navigation")).toBeInTheDocument();
  });

  it("should render divider", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <Categories />
        </MemoryRouter>
      </QueryClientProvider>
    );

    expect(screen.getByTestId("divider")).toBeInTheDocument();
  });

  it("should render newsletter", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <Categories />
        </MemoryRouter>
      </QueryClientProvider>
    );

    expect(screen.getByTestId("newsletter")).toBeInTheDocument();
  });

  it("should render footer", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <Categories />
        </MemoryRouter>
      </QueryClientProvider>
    );

    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });
});
