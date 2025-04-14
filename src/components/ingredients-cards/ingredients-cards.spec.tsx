import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { RecipeProps } from "../../types";
import { MemoryRouter } from "react-router-dom";
import { IngredientsCards } from ".";

const mockRecipes: RecipeProps = {
  id: "123",
  recipeName: "Delicious Pasta",
  recipeImage:
    "https://images.unsplash.com/photo-1573821201069-dbf297ca410a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  author: {
    authorName: "Chef Mario",
  },
};
describe("Ingredients Cards", () => {
  it("should render recipe image with alt text", () => {
    render(
      <MemoryRouter>
        <IngredientsCards othersRecipe={mockRecipes} />
      </MemoryRouter>
    );

    const image = screen.getByRole("img", { name: /delicious pasta/i });
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", mockRecipes.recipeImage);
  });

  it("should render the recipe name and author", () => {
    render(
      <MemoryRouter>
        <IngredientsCards othersRecipe={mockRecipes} />
      </MemoryRouter>
    );

    expect(screen.getByText("Delicious Pasta")).toBeInTheDocument();
    expect(screen.getByText(/by chef mario/i)).toBeInTheDocument();
  });

  it("should link to the recipe details page", () => {
    render(
      <MemoryRouter>
        <IngredientsCards othersRecipe={mockRecipes} />
      </MemoryRouter>
    );

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", `/recipe-details/${mockRecipes.id}`);
  });
});
