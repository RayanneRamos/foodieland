import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BlogProps } from "../../types";
import { BrowserRouter } from "react-router-dom";
import { ReactElement } from "react";
import { CardSearchNews } from ".";

const mockNews: BlogProps = {
  id: "1",
  title: "Test Blog Title",
  description: "This is a test blog description.",
  blogImage:
    "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
  author: {
    authorName: "John Doe",
    authorAvatar:
      "https://site112.com/i/lipsum-images/thumbs/image-lorem-face-5918.jpg",
    authorDatePosted: "April 15, 2025",
  },
};

const renderWithRouter = (ui: ReactElement) =>
  render(<BrowserRouter>{ui}</BrowserRouter>);

describe("Card Search News", () => {
  it("should render blog title, description, author name and date", () => {
    renderWithRouter(<CardSearchNews news={mockNews} />);

    expect(screen.getByText(mockNews.title as string)).toBeInTheDocument();
    expect(
      screen.getByText(mockNews.description as string)
    ).toBeInTheDocument();
    expect(
      screen.getByText(mockNews.author?.authorName as string)
    ).toBeInTheDocument();
    expect(
      screen.getByText(mockNews.author?.authorDatePosted as string)
    ).toBeInTheDocument();
  });
  it("should render blog image and author avatar with correct alt text", () => {
    renderWithRouter(<CardSearchNews news={mockNews} />);

    const blogImage = screen.getByAltText(mockNews.title as string);
    const avatarImage = screen.getByAltText(
      mockNews.author?.authorName as string
    );

    expect(blogImage).toBeInTheDocument();
    expect((blogImage as HTMLImageElement).src).toBe(mockNews.blogImage);

    expect(avatarImage).toBeInTheDocument();
    expect((avatarImage as HTMLImageElement).src).toBe(
      mockNews.author?.authorAvatar
    );
  });
  it("should contain link to the correct blog post page", () => {
    renderWithRouter(<CardSearchNews news={mockNews} />);

    const link = screen.getByRole("link", { name: mockNews.title });
    expect(link).toHaveAttribute("href", `/blog-post/${mockNews.id}`);
  });
  it("should not crash when news prop is undefined", () => {
    renderWithRouter(<CardSearchNews news={undefined} />);

    expect(screen.queryByText(/blog/i)).not.toBeInTheDocument();
  });
});
