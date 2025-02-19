interface AuthorProps {
  authorAvatar: string;
  authorName: string;
  authorDatePosted: string;
}

interface NutritionInformationProps {
  calories: string;
  totalFat: string;
  protein: string;
  carbohydrate: string;
  cholesterol: string;
}

interface IngredientProps {
  ingredientsQuantity: string;
  ingredientsName: string;
}

interface RecipeStepsProps {
  name: string;
  steps: IngredientProps[];
}

interface RecipeIngredientProps {
  recipeSteps: RecipeIngredientProps;
}
