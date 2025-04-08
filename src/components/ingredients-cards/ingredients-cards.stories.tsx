import { Meta, StoryObj } from "@storybook/react";
import { IngredientsCards } from ".";
import { MemoryRouter } from "react-router-dom";

const exampleIngredientsCards = {
  recipeImage: "/recipes/salad/salad-image-04.png",
  recipeName: "Caprese Salad",
  author: {
    authorName: "Isaac Foster",
  },
};

const meta: Meta<typeof IngredientsCards> = {
  title: "Ingredients Cards",
  component: IngredientsCards,
  args: {
    othersRecipe: exampleIngredientsCards,
  },
};

export default meta;

type Story = StoryObj<typeof IngredientsCards>;

export const Default: Story = {
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};
