import { describe, it, expect } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { CardOtherRecipes } from ".";

const mockRecipe = {
  id: "recipe-01",
  recipeName: "Delicious Lasagna",
  recipeImage:
    "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
  recipeCategory: "Pasta",
  cookTime: "45",
  recipeFavorite: false,
};

describe("Card Other Recipes", () => {
  it("should be render recipe image, title, cook time and category", () => {
    render(
      <MemoryRouter>
        <CardOtherRecipes moreRecipe={mockRecipe} />
      </MemoryRouter>
    );

    const image = screen.getByAltText(
      mockRecipe.recipeName
    ) as HTMLImageElement;
    expect(image).toBeInTheDocument();
    expect(image.src).toBe(mockRecipe.recipeImage);

    expect(screen.getByText(mockRecipe.recipeName)).toBeInTheDocument();
    expect(screen.getByText("45 Minutes")).toBeInTheDocument();
    expect(screen.getByText(mockRecipe.recipeCategory)).toBeInTheDocument();
  });

  it("should be render link with correct href", () => {
    render(
      <MemoryRouter>
        <CardOtherRecipes moreRecipe={mockRecipe} />
      </MemoryRouter>
    );

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", `/recipe-details/${mockRecipe.id}`);
  });

  it("should be toggle favorite state when FavoriteButton is clicked", () => {
    render(
      <MemoryRouter>
        <CardOtherRecipes moreRecipe={mockRecipe} />
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
