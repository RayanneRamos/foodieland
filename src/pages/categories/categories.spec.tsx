import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Categories } from ".";
import { categories } from "../../utils/categories";
import userEvent from "@testing-library/user-event";

const mockedUseNavigate = vi.fn();

vi.mock("react-router", async () => {
  const actual = await vi.importActual<typeof import("react-router")>(
    "react-router"
  );
  return {
    ...actual,
    useNavigate: () => mockedUseNavigate,
  };
});

describe("Categories", () => {
  beforeEach(() => {
    mockedUseNavigate.mockClear();
  });
  it("should render the title Categories", () => {
    render(
      <MemoryRouter>
        <Categories />
      </MemoryRouter>
    );

    expect(screen.getByText("Categories")).toBeInTheDocument();
  });

  it("should render all categories", () => {
    render(
      <MemoryRouter>
        <Categories />
      </MemoryRouter>
    );

    categories.forEach((category) => {
      expect(screen.getByText(category.name)).toBeInTheDocument();
    });
  });

  it("should navigate to the correct category when clicking on a category", async () => {
    render(
      <MemoryRouter>
        <Categories />
      </MemoryRouter>
    );

    const user = userEvent.setup();
    const firstCategory = categories[0];
    const categoryButton = screen.getByText(firstCategory.name);
    await user.click(categoryButton);

    expect(mockedUseNavigate).toHaveBeenCalledWith(
      `/categories/${firstCategory.id}`
    );
  });
});
