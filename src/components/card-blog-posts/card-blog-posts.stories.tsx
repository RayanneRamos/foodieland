import { Meta, StoryObj } from "@storybook/react";
import { CardBlogPosts } from ".";
import { MemoryRouter } from "react-router-dom";

const examplePost = {
  id: "ee1a4847-3bdc-4499-ba2d-19b255ef205b",
  title:
    "The Rise of Plant-Based Cuisine: How Chefs Are Innovating Meatless Menus",
  description:
    "Chefs worldwide are revolutionizing plant-based cuisine by crafting innovative, flavorful meatless dishes. This shift reflects growing consumer demand for sustainable and healthy dining options.",
  author: {
    authorAvatar: "/blog-authors/author-dylan-miller.jpeg",
    authorName: "Dylan Miller",
    authorDatePosted: "02 February 2020",
  },
  blogImage: "/blog-photos/blog-image-01.png",
};

const meta: Meta<typeof CardBlogPosts> = {
  title: "Card Blog Posts",
  component: CardBlogPosts,
  args: {
    blog: examplePost,
  },
};

export default meta;

type Story = StoryObj<typeof CardBlogPosts>;

export const Default: Story = {
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};
