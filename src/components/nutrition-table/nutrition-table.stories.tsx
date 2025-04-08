import { Meta, StoryObj } from "@storybook/react";
import { NutritionTable } from ".";

const exampleNutritionTable = {
  calories: "71",
  totalFat: "70",
  protein: "37",
  carbohydrate: "179",
  cholesterol: "197",
};

const meta: Meta<typeof NutritionTable> = {
  title: "Nutrition Table",
  component: NutritionTable,
  args: {
    nutrition: exampleNutritionTable,
  },
};

export default meta;

type Story = StoryObj<typeof NutritionTable>;

export const Default: Story = {};
