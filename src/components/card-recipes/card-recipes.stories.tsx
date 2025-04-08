import { Meta, StoryObj } from "@storybook/react";
import { CardRecipes } from ".";
import { MemoryRouter } from "react-router-dom";

const exampleCardRecipes = {
  recipeName: "Fluffy Banana Pancakes",
  recipeImage: "/recipes/breakfast/breakfast-image-01.png",
  cookTime: "15",
  recipeCategory: "Breakfast",
  recipeFavorite: false,
};

const meta: Meta<typeof CardRecipes> = {
  title: "Card Recipes",
  component: CardRecipes,
  args: {
    recipe: exampleCardRecipes,
  },
};

export default meta;

type Story = StoryObj<typeof CardRecipes>;

export const Default: Story = {
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};
