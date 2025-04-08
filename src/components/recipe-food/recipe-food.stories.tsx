import { Meta, StoryObj } from "@storybook/react";
import { RecipeFood } from ".";

const meta: Meta<typeof RecipeFood> = {
  title: "Recipe Food",
  component: RecipeFood,
};

export default meta;

type Story = StoryObj<typeof RecipeFood>;

export const Clock: Story = {
  args: {
    icon: "Clock",
    name: "15 minutes",
  },
};

export const ForkKnife: Story = {
  args: {
    icon: "ForkKnife",
    name: "Seafood",
  },
};
