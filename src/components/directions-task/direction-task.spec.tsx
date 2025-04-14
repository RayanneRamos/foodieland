import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { DirectionsTask } from ".";
import userEvent from "@testing-library/user-event";

describe("Direction Task", () => {
  it("should render the task text", () => {
    render(<DirectionsTask task="Cut the vegetables" />);

    expect(screen.getByText("Cut the vegetables")).toBeInTheDocument();
  });

  it("should render a checkbox", () => {
    render(<DirectionsTask task="Boil water" />);

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();
  });

  it("should check and unckeck the checkbox on click", async () => {
    render(<DirectionsTask task="Fry the onions" />);

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).not.toBeChecked();

    await userEvent.click(checkbox);
    expect(checkbox).toBeChecked();

    await userEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });
});
