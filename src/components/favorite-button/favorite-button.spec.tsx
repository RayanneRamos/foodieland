import { describe, it, expect } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { FavoriteButton } from ".";
import styles from "./styles.module.scss";

describe("Favorite Button", () => {
  it("should render the button with aria attributes", () => {
    const toggleFavorite = vi.fn();

    render(
      <FavoriteButton isFavorite={false} toggleFavorite={toggleFavorite} />
    );

    const button = screen.getByRole("button", { name: /favorite/i });

    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("aria-pressed", "false");
    expect(button).toHaveAttribute("aria-label", "favorite");
    expect(button).toHaveClass(styles.container);
  });

  it("should call toggleFavorite on click", () => {
    const toggleFavorite = vi.fn();

    render(
      <FavoriteButton isFavorite={false} toggleFavorite={toggleFavorite} />
    );

    const button = screen.getByRole("button", { name: /favorite/i });

    fireEvent.click(button);
    expect(toggleFavorite).toHaveBeenCalledTimes(1);
  });

  it("should set aria-pressed to true when isFavorite is true", () => {
    const toggleFavorite = vi.fn();

    render(
      <FavoriteButton isFavorite={true} toggleFavorite={toggleFavorite} />
    );

    const button = screen.getByRole("button", { name: /favorite/i });

    expect(button).toHaveAttribute("aria-pressed", "true");
  });
});
