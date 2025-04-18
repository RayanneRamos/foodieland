import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { BlogPost } from ".";

vi.mock("react-router", async () => {
  const actual = await vi.importActual<typeof import("react-router")>(
    "react-router"
  );
  return {
    ...actual,
    useParams: () => ({ id: "1" }), // id existente no mock do blog
  };
});

vi.mock("../../components/navigation", () => ({
  Navigation: () => <nav data-testid="navigation">Navigation</nav>,
}));

vi.mock("../../components/newsletter", () => ({
  Newsletter: () => <div data-testid="newsletter" />,
}));

vi.mock("../../components/footer", () => ({
  Footer: () => <footer data-testid="footer">Footer</footer>,
}));

vi.mock("../../utils/blog", () => ({
  blog: [
    {
      id: "1",
      title:
        "The Rise of Plant-Based Cuisine: How Chefs Are Innovating Meatless Menus",
      description: "A deep dive into the future of sustainable food.",
      author: {
        authorAvatar: "avatar.png",
        authorName: "Chef Plant",
        authorDatePosted: "2024-01-01",
      },
      blogImage: "image.png",
      postBlockquote: "Healthy and sustainable.",
      posts: [
        {
          postQuestion: "Why plant-based?",
          postAnswers: "It’s better for the environment.",
        },
        {
          postQuestion: "What’s trending?",
          postAnswers: "Tofu and jackfruit.",
        },
        {
          postQuestion: "Is it tasty?",
          postAnswers: "Absolutely!",
        },
        {
          postQuestion: "Chef’s quote?",
          postAnswers: "Eat green!",
        },
      ],
    },
  ],
}));

describe("Blog Post", () => {
  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={["/blog-post/1"]}>
        <Routes>
          <Route path="/blog-post/:id" element={<BlogPost />} />
        </Routes>
      </MemoryRouter>
    );
  });
  it("should render post title and description", async () => {
    await waitFor(() =>
      expect(
        screen.getByText(
          "The Rise of Plant-Based Cuisine: How Chefs Are Innovating Meatless Menus"
        )
      ).toBeInTheDocument()
    );

    expect(
      screen.getByText("A deep dive into the future of sustainable food.")
    ).toBeInTheDocument();
  });

  it("should render author name and avatar", async () => {
    await waitFor(() => screen.getByText(/chef plant/i));
    expect(screen.getByText(/chef plant/i)).toBeInTheDocument();
    expect(screen.getByAltText(/chef plant/i)).toBeInTheDocument();
  });

  it("should render social media share buttons", async () => {
    const facebookIcons = screen.getAllByAltText(/facebook/i);
    expect(facebookIcons).toHaveLength(1);

    const twitterIcons = screen.getAllByAltText(/twitter/i);
    expect(twitterIcons).toHaveLength(1);

    const instagramIcons = screen.getAllByAltText(/instagram/i);
    expect(instagramIcons).toHaveLength(1);
  });

  it("should render recipe section with cards", async () => {
    await waitFor(() => screen.getByText("Check out the delicious recipe"));
    expect(
      screen.getByText("Check out the delicious recipe")
    ).toBeInTheDocument();
    expect(screen.getAllByRole("img")).toHaveLength(9);
  });

  it("should render footer", async () => {
    await waitFor(() => screen.getByTestId("footer"));
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });

  it("should render newsletter", async () => {
    await waitFor(() => screen.getByTestId("newsletter"));
    expect(screen.getByTestId("newsletter")).toBeInTheDocument();
  });
});
