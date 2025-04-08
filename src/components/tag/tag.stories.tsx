import { Meta, StoryObj } from "@storybook/react";
import { Tag } from ".";

const meta: Meta<typeof Tag> = {
  title: "Tag",
  component: Tag,
};

export default meta;

type Story = StoryObj<typeof Tag>;

export const Default: Story = {};
