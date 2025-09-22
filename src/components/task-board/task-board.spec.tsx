import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { TaskBoard } from ".";
import { RecipeProps } from "../../types";

const mockIngredients = {
  recipeIngredient: [
    {
      recipeSteps: {
        name: "Step 1: Prepare Ingredients",
        steps: [
          {
            ingredientQuantity: "1 cup",
            ingredientName: "flour",
          },
          {
            ingredientQuantity: "2",
            ingredientName: "eggs",
          },
        ],
      },
    },
    {
      recipeSteps: {
        name: "Step 2: Mix Ingredients",
        steps: [
          {
            ingredientQuantity: "1/2 cup",
            ingredientName: "milk",
          },
        ],
      },
    },
  ],
};

describe("Task Board", () => {
  it("should render all recipe steps titles", () => {
    render(<TaskBoard ingredient={mockIngredients} />);

    expect(
      screen.getByText(/Step 1: prepare ingredients/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/Step 2: mix ingredients/i)).toBeInTheDocument();
  });

  it("should render all ingredients", () => {
    render(<TaskBoard ingredient={mockIngredients} />);

    const flourItems = screen.getAllByText(
      (_, el) => el?.textContent === "1 cup flour"
    );
    expect(flourItems.length).toBeGreaterThan(0);

    const eggsItems = screen.getAllByText(
      (_, el) => el?.textContent === "2 eggs"
    );
    expect(eggsItems.length).toBeGreaterThan(0);

    const miilkItems = screen.getAllByText(
      (_, el) => el?.textContent === "1/2 cup milk"
    );
    expect(miilkItems.length).toBeGreaterThan(0);
  });

  it("should not crash when ingredients are empty", () => {
    const emptyProps: RecipeProps = { recipeIngredient: [] };
    render(<TaskBoard ingredient={emptyProps} />);

    expect(screen.queryByText(/step/i)).not.toBeInTheDocument();
  });
});
