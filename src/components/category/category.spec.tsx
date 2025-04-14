import { describe, it, expect } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { Category } from ".";

describe("Category", () => {
  const mockProps = {
    image:
      "https://plus.unsplash.com/premium_photo-1732757787045-d903f2e88b08?q=80&w=1954&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Breakfast",
  };
  it("should render image and name", () => {
    render(<Category {...mockProps} />);

    const image = screen.getByRole("img");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", mockProps.image);

    const name = screen.getByText(mockProps.name);
    expect(name).toBeInTheDocument();
  });

  it("should call onClick when clicked", () => {
    const handleClick = vi.fn();
    render(<Category {...mockProps} onClick={handleClick} />);

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("should accept additional props", () => {
    render(<Category {...mockProps} title="category-button" />);

    const button = screen.getByTitle("category-button");
    expect(button).toBeInTheDocument();
  });
});
