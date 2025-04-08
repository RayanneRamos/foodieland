import { Meta, StoryObj } from "@storybook/react";
import { Task } from ".";

const meta: Meta<typeof Task> = {
  title: "Task",
  component: Task,
  args: {
    ingredients: {
      ingredientsName: "Sugar",
      ingredientsQuantity: "1/2",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Task>;

export const Default: Story = {};
