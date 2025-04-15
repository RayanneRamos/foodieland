import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { RecipeInfo } from ".";

describe("Recipe Info", () => {
  it("should render the title and subtitle correctly", () => {
    render(<RecipeInfo title="Preparation Time" subtitle="45" />);

    expect(screen.getByText(/preparation time/i)).toBeInTheDocument();
    expect(screen.getByText(/45 minutes/i)).toBeInTheDocument();
  });

  it("should render only the title when subtitle is not provided", () => {
    render(<RecipeInfo title="Preparation Time" />);

    expect(screen.getByText(/preparation time/i)).toBeInTheDocument();
    expect(screen.queryByText(/minutes/i)).not.toBeInTheDocument();
  });

  it("should render the clock icon", () => {
    const { container } = render(<RecipeInfo title="Time" subtitle="30" />);

    const icon = container.querySelector("svg");
    expect(icon).toBeInTheDocument();
  });
});
