import { Meta, StoryObj } from "@storybook/react";
import { CardOtherRecipes } from ".";
import { MemoryRouter } from "react-router-dom";

const exampleMoreRecipes = {
  recipeName: "Fluffy Banana Pancakes",
  cookTime: "15",
  recipeCategory: "Breakfast",
  recipeImage: "/recipes/breakfast/breakfast-image-01.png",
  recipeFavorite: true,
};

const meta: Meta<typeof CardOtherRecipes> = {
  title: "Card Other Recipes",
  component: CardOtherRecipes,
  args: {
    moreRecipe: exampleMoreRecipes,
  },
};

export default meta;

type Story = StoryObj<typeof CardOtherRecipes>;

export const Default: Story = {
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};
