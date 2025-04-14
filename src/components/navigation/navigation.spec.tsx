import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Navigation } from ".";

vi.mock("../../assets/logo.svg", () => ({ default: "logo.svg" }));
vi.mock("../../assets/facebook.svg", () => ({ default: "facebook.svg" }));
vi.mock("../../assets/twitter.svg", () => ({ default: "twitter.svg" }));
vi.mock("../../assets/instagram.svg", () => ({ default: "instagram.svg" }));

describe("Navigation", () => {
  it("should render the logo", () => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );

    const logos = screen.getAllByAltText(/logo/i);
    expect(logos.length).toBeGreaterThan(1);

    expect(logos[0]).toBeInTheDocument();
  });

  it("should render all navigation links", () => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );
    const recipesLink = screen.getByRole("link", { name: /recipes/i });
    const blogLink = screen.getByRole("link", { name: /blog/i });
    const contactLink = screen.getByRole("link", { name: /contact/i });
    const aboutUsLink = screen.getByRole("link", { name: /about us/i });

    expect(recipesLink).toHaveAttribute("href", "/recipes");
    expect(blogLink).toHaveAttribute("href", "/blog-list");
    expect(contactLink).toHaveAttribute("href", "/contact");
    expect(aboutUsLink).toHaveAttribute("href", "/about-us");
  });

  it("should render social media icons", () => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );

    const facebookIcon = screen.getByRole("img", { name: /facebook/i });
    const twitterIcon = screen.getByRole("img", { name: /twitter/i });
    const instagramIcon = screen.getByRole("img", { name: /instagram/i });

    expect(facebookIcon).toBeInTheDocument();
    expect(twitterIcon).toBeInTheDocument();
    expect(instagramIcon).toBeInTheDocument();
  });
});
