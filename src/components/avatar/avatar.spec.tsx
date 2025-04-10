import { describe, it, expect } from "vitest";
import { Avatar } from ".";
import { render, screen } from "@testing-library/react";
import avatarImage from "../../assets/avatar.png";

describe("Avatar", () => {
  it("should be renders with default values when no author is provided", () => {
    render(<Avatar />);

    const image = screen.getByAltText("avatar-image") as HTMLImageElement;
    expect(image).toBeInTheDocument();
    expect(image.src).toContain(avatarImage);

    expect(screen.getByText("John Smith")).toBeInTheDocument();
    expect(screen.getByText("15 March 2022")).toBeInTheDocument();
  });

  it("should be renders with provided author props", () => {
    const customAuthor = {
      authorAvatar: "http://localhost:3000/src/assets/avatar.png",
      authorName: "John Doe",
      authorDatePosted: "10 April 2025",
    };

    render(<Avatar author={customAuthor} />);

    const image = screen.getByAltText("avatar-image") as HTMLImageElement;
    expect(image.src).toBe(customAuthor.authorAvatar);

    expect(screen.getByText(customAuthor.authorName)).toBeInTheDocument();
    expect(screen.getByText(customAuthor.authorDatePosted)).toBeInTheDocument();
  });

  it("should be includes a motion animation span with the author name", () => {
    render(<Avatar />);

    const name = screen.getByText("John Smith");
    expect(name.tagName.toLowerCase()).toBe("span");
  });
});
