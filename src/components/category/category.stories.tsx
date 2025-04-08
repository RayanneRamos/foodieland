import { Meta, StoryObj } from "@storybook/react";
import { Category } from ".";
import fishImage from "../../assets/categories/fish.png";

const meta: Meta<typeof Category> = {
  title: "Category",
  component: Category,
  args: {
    name: "Seafood",
    image: fishImage,
  },
};

export default meta;

type Story = StoryObj<typeof Category>;

export const Default: Story = {};
