import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { CardBlogPosts } from ".";

const mockBlog = {
  id: "1",
  blogImage:
    "https://images.unsplash.com/photo-1742268350534-d453e71222cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNXx8fGVufDB8fHx8fA%3D%3D",
  title: "Test Blog Post",
  description: "This is a test description for the blog post.",
  author: {
    authorAvatar:
      "https://site112.com/i/lipsum-images/thumbs/image-lorem-face-6517.jpg",
    authorName: "Jane Doe",
    authorDatePosted: "10 April 2025",
  },
};

describe("Card Blog Posts", () => {
  it("should be render blog image", () => {
    render(
      <MemoryRouter>
        <CardBlogPosts blog={mockBlog} />
      </MemoryRouter>
    );

    const blogImage = screen.getByAltText("Test Blog Post") as HTMLImageElement;
    expect(blogImage).toBeInTheDocument();
    expect(blogImage.src).toBe(mockBlog.blogImage);
  });

  it("should be render blog title and description", () => {
    render(
      <MemoryRouter>
        <CardBlogPosts blog={mockBlog} />
      </MemoryRouter>
    );

    expect(screen.getByText("Test Blog Post")).toBeInTheDocument();
    expect(screen.getByText(mockBlog.description)).toBeInTheDocument();
  });

  it("should be render authors avatar and name", () => {
    render(
      <MemoryRouter>
        <CardBlogPosts blog={mockBlog} />
      </MemoryRouter>
    );

    const avatar = screen.getByAltText(
      mockBlog.author.authorName
    ) as HTMLImageElement;
    expect(avatar).toBeInTheDocument();
    expect(avatar.src).toBe(mockBlog.author.authorAvatar);

    expect(screen.getByText(mockBlog.author.authorName)).toBeInTheDocument();
  });

  it("should be render the date posted", () => {
    render(
      <MemoryRouter>
        <CardBlogPosts blog={mockBlog} />
      </MemoryRouter>
    );

    expect(screen.getByText("10 April 2025")).toBeInTheDocument();
  });

  it("should be link to the correct blog post page", () => {
    render(
      <MemoryRouter>
        <CardBlogPosts blog={mockBlog} />
      </MemoryRouter>
    );

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", `/blog-post/${mockBlog.id}`);
  });
});
