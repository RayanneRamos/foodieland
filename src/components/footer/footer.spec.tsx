import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Footer } from ".";
import { MemoryRouter } from "react-router-dom";

vi.mock("../../assets/logo.svg", () => ({ default: "logo.svg" }));
vi.mock("../../assets/facebook.svg", () => ({ default: "facebook.svg" }));
vi.mock("../../assets/twitter.svg", () => ({ default: "twitter.svg" }));
vi.mock("../../assets/instagram.svg", () => ({ default: "instagram.svg" }));

describe("Footer", () => {
  it("should render the logo", () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    const logo = screen.getByRole("img", { name: /foodieland/i });
    expect(logo).toBeInTheDocument();
  });

  it("should render the subtitle", () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    const subtitle = screen.getByText(/lorem ipsum dolor sit amet/i);
    expect(subtitle).toBeInTheDocument();
  });

  it("should render the footer navigation links", () => {
    render(
      <MemoryRouter>
        <Footer />
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

  it("should render the copyright text", () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    const copyrightText = screen.getByText(/© 2025 flowbase/i);
    expect(copyrightText).toBeInTheDocument();
  });

  it("should render the social icons", () => {
    render(
      <MemoryRouter>
        <Footer />
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
