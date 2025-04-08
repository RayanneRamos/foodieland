import { Meta, StoryObj } from "@storybook/react";
import { DirectionsTask } from ".";

const meta: Meta<typeof DirectionsTask> = {
  title: "Directions Task",
  component: DirectionsTask,
  args: {
    task: "Add 150ml of hot water",
  },
};

export default meta;

type Story = StoryObj<typeof DirectionsTask>;

export const Default: Story = {};
