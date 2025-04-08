import { Meta, StoryObj } from "@storybook/react";
import { RecipeInfo } from ".";

const meta: Meta<typeof RecipeInfo> = {
  title: "Recipe Info",
  component: RecipeInfo,
};

export default meta;

type Story = StoryObj<typeof RecipeInfo>;

export const PrepTime: Story = {
  args: {
    title: "Prep Time",
    subtitle: "15",
  },
};

export const CookTime: Story = {
  args: {
    title: "Cook Time",
    subtitle: "35",
  },
};
