import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { VerticalDivider } from ".";

describe("Vertical Divider", () => {
  it("should render a divider element", () => {
    const { container } = render(<VerticalDivider />);
    const divider = container.firstChild;

    expect(divider).toBeInTheDocument();
    expect(divider).toBeInstanceOf(HTMLDivElement);
  });

  it("should have the correct class name", () => {
    const { container } = render(<VerticalDivider />);
    const divider = container.firstChild as HTMLElement;

    expect(divider.className).toMatch(/container/i);
  });
});
