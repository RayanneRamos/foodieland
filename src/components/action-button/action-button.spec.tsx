import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { ActionButton } from ".";

describe("Action Button", () => {
  it("should be render icon Printer and text correctly", () => {
    render(<ActionButton icon="Printer" name="Print" />);
    expect(screen.getByText(/print/i)).toBeInTheDocument();
  });

  it("should be render icon Export and text correctly", () => {
    render(<ActionButton icon="Export" name="Share" />);
  });
});
