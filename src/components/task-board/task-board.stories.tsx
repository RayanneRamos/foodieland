import { Meta, StoryObj } from "@storybook/react";
import { TaskBoard } from ".";

const meta: Meta<typeof TaskBoard> = {
  title: "Task Board",
  component: TaskBoard,
  args: {
    ingredients: {
      recipeIngredients: [
        {
          recipeSteps: {
            name: "For main dish",
            steps: [
              {
                ingredientsQuantity: "1",
                ingredientsName: "ripe banana (mashed)",
              },
            ],
          },
        },
      ],
    },
  },
};

export default meta;

type Story = StoryObj<typeof TaskBoard>;

export const Default: Story = {};
