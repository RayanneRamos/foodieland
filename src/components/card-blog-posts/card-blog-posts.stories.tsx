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
  posts: [
    {
      postQuestion: "A Culinary Revolution in Plant-Based Dining",
      postAnswers:
        "The plant-based food movement is gaining momentum, with chefs worldwide embracing innovative techniques to craft flavorful, satisfying meatless dishes. Driven by sustainability concerns and evolving consumer preferences, this shift is reshaping modern gastronomy.",
    },
    {
      postQuestion: "Reinventing Classic Dishes Without Meat",
      postAnswers:
        "From plant-based burgers to dairy-free cheeses, chefs are reimagining traditional recipes using alternative ingredients. By leveraging mushrooms, legumes, and fermented products, they achieve rich textures and umami flavors, proving that plant-based meals can be just as indulgent as their meat-based counterparts.",
    },
    {
      postQuestion: "The Role of Technology in Plant-Based Innovation",
      postAnswers:
        "Advancements in food science are playing a crucial role in expanding plant-based cuisine. Ingredients like pea protein, jackfruit, and lab-grown dairy offer chefs new ways to create dishes that closely mimic the taste and texture of animal products. These innovations are making plant-based diets more accessible to a broader audience.",
    },
    {
      postQuestion: "The Sustainability Factor: Why It Matters",
      postAnswers:
        "Reducing meat consumption benefits not only personal health but also the environment. Studies show that plant-based diets significantly lower carbon emissions, water consumption, and deforestation. As a result, many restaurants are adopting more eco-friendly menus to align with these sustainability goals.",
    },
    {
      postQuestion: "The Future of Plant-Based Dining",
      postAnswers:
        "With consumer interest in plant-based options at an all-time high, the future looks promising. More fine-dining establishments and fast-food chains are incorporating plant-based alternatives, ensuring that meatless cuisine continues to evolve and gain mainstream acceptance.",
    },
  ],
  postBlockquote:
    "Plant-based cuisine is not just a trend—it’s a movement towards a more sustainable and flavorful future. – Chef Marco Leduc",
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
