import { Meta, StoryObj } from "@storybook/react";
import { Title } from ".";

const meta: Meta<typeof Title> = {
  title: "Title",
  component: Title,
  args: {
    children: "Blog & Recipes",
  },
};

export default meta;

type Story = StoryObj<typeof Title>;

export const Default: Story = {};
