import { Meta, StoryObj } from "@storybook/react";
import { Label } from ".";

const meta: Meta<typeof Label> = {
  title: "Label",
  component: Label,
  args: {
    icon: "ForkKnife",
    name: "Chicken",
  },
};

export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = {};
