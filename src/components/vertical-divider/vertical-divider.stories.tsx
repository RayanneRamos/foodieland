import { Meta, StoryObj } from "@storybook/react";
import { VerticalDivider } from ".";

const meta: Meta<typeof VerticalDivider> = {
  title: "Vertical Divider",
  component: VerticalDivider,
};

export default meta;

type Story = StoryObj<typeof VerticalDivider>;

export const Default: Story = {};
