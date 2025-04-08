import { Meta, StoryObj } from "@storybook/react";
import { CardOtherRecipes } from ".";
import { MemoryRouter } from "react-router-dom";

const exampleMoreRecipes = {
  id: "0f33659c-7003-4e8a-a64c-b63e7e07ac64",
  recipeName: "Fluffy Banana Pancakes",
  author: {
    authorAvatar: "/authors/author-easton-lee.jpeg",
    authorName: "Easton Lee",
    authorDatePosted: "12 September 2024",
  },
  prepareTime: "10",
  cookTime: "15",
  recipeCategory: "Breakfast",
  categoryId: "1",
  recipeImage: "/recipes/breakfast/breakfast-image-01.png",
  recipeFavorite: true,
  nutritionInformation: {
    calories: "250",
    totalFat: "8",
    protein: "6",
    carbohydrate: "38",
    cholesterol: "40",
  },
  recipeDescription:
    "Fluffy Banana Pancakes are soft, airy, and naturally sweet, made with ripe bananas for a delicious breakfast treat. They are easy to prepare, requiring simple ingredients like flour, eggs, and milk. These pancakes turn golden brown on the outside while remaining light and fluffy inside. Perfect with maple syrup, fresh fruit, or a sprinkle of cinnamon!",
  recipeIngredients: [
    {
      recipeSteps: {
        name: "For main dish",
        steps: [
          {
            ingredientsQuantity: "1",
            ingredientsName: "ripe banana (mashed)",
          },
          {
            ingredientsQuantity: "1",
            ingredientsName: "cup all-purpose flour",
          },
          {
            ingredientsQuantity: "1",
            ingredientsName: "tbsp sugar",
          },
          {
            ingredientsQuantity: "1",
            ingredientsName: "tsp baking powder",
          },
          {
            ingredientsQuantity: "1/2",
            ingredientsName: "tsp cinnamon",
          },
          {
            ingredientsQuantity: "1",
            ingredientsName: "cup milk (dairy or plant-based)",
          },
          {
            ingredientsQuantity: "1",
            ingredientsName: "egg",
          },
          {
            ingredientsQuantity: "1",
            ingredientsName: "tsp vanilla extract",
          },
          {
            ingredientsQuantity: "1",
            ingredientsName: "tbsp melted butter",
          },
        ],
      },
    },
  ],
  recipeDirections: [
    {
      directionTitle: "Mix dry ingredients",
      directionDescription:
        "In a bowl, whisk flour, sugar, baking powder, and cinnamon.",
    },
    {
      directionTitle: "Prepare wet ingredients",
      directionDescription:
        "In another bowl, mix mashed banana, milk, egg, vanilla, and melted butter.",
    },
    {
      directionTitle: "Combine",
      directionDescription:
        "Gradually add dry ingredients into the wet mixture, stirring until smooth.",
    },
    {
      directionTitle: "Cook",
      directionDescription:
        "Heat a greased pan over medium heat and cook pancakes for 2 minutes on each side until golden brown.",
    },
    {
      directionTitle: "Serve",
      directionDescription: "Stack them up, drizzle with syrup, and enjoy!",
    },
  ],
};

const meta: Meta<typeof CardOtherRecipes> = {
  title: "Card Other Recipes",
  component: CardOtherRecipes,
  args: {
    moreRecipe: exampleMoreRecipes,
  },
};

export default meta;

type Story = StoryObj<typeof CardOtherRecipes>;

export const Default: Story = {
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};
