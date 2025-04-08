import { Meta, StoryObj } from "@storybook/react";
import { Button } from ".";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  args: {
    name: "View Recipes",
    icon: "PlayCircle",
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {};
