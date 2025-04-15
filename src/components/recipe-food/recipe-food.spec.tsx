import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { RecipeFood } from ".";

describe("Recipe Food", () => {
  it("should render the icon and name correctly", () => {
    const { container } = render(
      <RecipeFood icon="Pizza" name="Pizza Italiana" />
    );

    expect(screen.getByText(/pizza italiana/i)).toBeInTheDocument();
    expect(container.querySelector("svg")).toBeInTheDocument();
  });

  it("should render different icons based on the 'icon' prop", () => {
    const { rerender } = render(<RecipeFood icon="AppleLogo" name="Maçã" />);
    expect(screen.getByText(/maçã/i)).toBeInTheDocument();

    rerender(<RecipeFood icon="Pizza" name="Pizza" />);
    expect(screen.getByText(/pizza/i)).toBeInTheDocument();
  });
});
