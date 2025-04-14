import { describe, it, expect } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { RecipeProps } from "../../types";
import { MemoryRouter } from "react-router-dom";
import { CardRecipes } from ".";

const mockRecipes: RecipeProps = {
  id: "1",
  recipeImage:
    "https://images.unsplash.com/photo-1683827449087-ccf5a9e6283c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  recipeName: "Spaghetti Carbonara",
  recipeCategory: "Italian",
  cookTime: "25",
  recipeFavorite: false,
};

describe("Card Recipes", () => {
  it("should render recipe image, name, cook time and category", () => {
    render(
      <MemoryRouter>
        <CardRecipes recipe={mockRecipes} />
      </MemoryRouter>
    );

    const image = screen.getByAltText(
      mockRecipes.recipeName as string
    ) as HTMLImageElement;
    expect(image).toBeInTheDocument();
    expect(image.src).toBe(mockRecipes.recipeImage);

    expect(
      screen.getByText(mockRecipes.recipeName as string)
    ).toBeInTheDocument();

    expect(screen.getByText(/25 minutes/i)).toBeInTheDocument();
    expect(
      screen.getByText(mockRecipes.recipeCategory as string)
    ).toBeInTheDocument();
  });

  it("should toggle favorite state when FavoriteButton is clicked", () => {
    render(
      <MemoryRouter>
        <CardRecipes recipe={mockRecipes} />
      </MemoryRouter>
    );

    const favoriteButton = screen.getByRole("button", { name: /favorite/i });
    expect(favoriteButton).toBeInTheDocument();

    fireEvent.click(favoriteButton);
    expect(favoriteButton).toHaveAttribute("aria-pressed", "true");

    fireEvent.click(favoriteButton);
    expect(favoriteButton).toHaveAttribute("aria-pressed", "false");
  });
});
