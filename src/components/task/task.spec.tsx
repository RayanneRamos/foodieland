import { describe, it, expect } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { Task } from ".";

const ingredientsExample = {
  ingredientsName: "Flour",
  ingredientsQuantity: "2 cups",
};

describe("Task", () => {
  it("should render ingredient name and quantity", () => {
    render(<Task ingredients={ingredientsExample} />);

    expect(screen.getByText(/2 cups flour/i)).toBeInTheDocument();
  });

  it("should toggle checkbox and apply completed style", () => {
    render(<Task ingredients={ingredientsExample} />);

    const checkbox = screen.getByRole("checkbox");
    const text = screen.getByText(/2 cups/i);

    expect(checkbox).not.toBeChecked();
    expect(text.className).not.toMatch(/completed/i);

    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    expect(text.className).toMatch(/completed/i);

    fireEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
    expect(text.className).not.match(/completed/i);
  });

  it("should render nothing when ingredients are undefined", () => {
    render(<Task />);
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
  });
});
