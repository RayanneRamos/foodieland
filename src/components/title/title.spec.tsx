import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Title } from ".";

describe("Title", () => {
  it("should render the children correctly", () => {
    render(<Title>Delicious Recipes</Title>);

    const titleElement = screen.getByText(/delicious recipes/i);
    expect(titleElement).toBeInTheDocument();
  });

  it("should render an h1 element", () => {
    render(<Title>Test Heading</Title>);

    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
  });
});
