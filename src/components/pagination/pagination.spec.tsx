import { describe, it, expect } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { Pagination } from ".";

describe("Pagination", () => {
  it("should render pagination buttons correctly", () => {
    render(
      <Pagination currentPage={1} totalPages={10} onPageChange={() => {}} />
    );

    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("...")).toBeInTheDocument();
    expect(screen.getByText("10")).toBeInTheDocument();
  });

  it("should call onPageChange when clicking next", () => {
    const onPageChange = vi.fn();
    render(
      <Pagination currentPage={1} totalPages={5} onPageChange={onPageChange} />
    );

    fireEvent.click(screen.getByRole("button", { name: "next" }));

    fireEvent.click(screen.getByText("2"));
    expect(onPageChange).toHaveBeenCalledWith(2);
  });

  it("should disable previous button on first page", () => {
    render(
      <Pagination currentPage={1} totalPages={5} onPageChange={() => {}} />
    );

    const buttons = screen.getAllByRole("button");
    expect(buttons[0]).toBeDisabled();
  });

  it("should disable next button on last page", () => {
    const onPageChange = vi.fn();

    render(
      <Pagination currentPage={5} totalPages={5} onPageChange={onPageChange} />
    );

    const nextButton = screen.getByLabelText("next");
    expect(nextButton).toBeDisabled();
  });

  it("should show ellipsis when pages are more than visible pages", () => {
    render(
      <Pagination currentPage={1} totalPages={10} onPageChange={() => {}} />
    );

    expect(screen.getByText("...")).toBeInTheDocument();
  });

  it("should call onPageChange with correct number on numbered button click", () => {
    const onPageChange = vi.fn();
    render(
      <Pagination currentPage={1} totalPages={5} onPageChange={onPageChange} />
    );

    const button = screen.getByText("5");
    fireEvent.click(button);

    expect(onPageChange).toHaveBeenCalledWith(5);
  });
});
