import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Tag } from ".";

describe("Tag", () => {
  it("should render the paper image with correct alt text", () => {
    render(<Tag />);

    const image = screen.getByAltText("paper-image");
    expect(image).toBeInTheDocument();
  });

  it("should render the tag name text", () => {
    render(<Tag />);

    const tagText = screen.getByText(/hot recipes/i);
    expect(tagText).toBeInTheDocument();
  });
});
