import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Label } from ".";

describe("Label", () => {
  it("should render the icon passed via props", () => {
    render(<Label icon="Heart" />);

    const svgElement = screen.getByTestId("icon");
    expect(svgElement).toBeInTheDocument();
  });

  it("should render the label name when provided", () => {
    render(<Label icon="Heart" name="Favorite" />);

    expect(screen.getByText("Favorite")).toBeInTheDocument();
  });
});
