import { describe, it, expect } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from ".";

describe("Button", () => {
  it("should be render with the given name", () => {
    render(<Button name="Click me" />);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("should be render the correct icon if provided", () => {
    render(<Button name="Like" icon="Heart" />);

    const iconSVG = screen.getByRole("button").querySelector("svg");
    expect(iconSVG).toBeInTheDocument();
  });

  it("should be does not render an icon if nome is provided", () => {
    render(<Button name="No icon" />);

    const icons = screen.queryAllByRole("img", { hidden: true });
    expect(icons.length).toBe(0);
  });

  it("should be call the onclick handler when clicked", () => {
    const handleClick = vi.fn();
    render(<Button name="Click" onClick={handleClick} />);

    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
