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
  recipeSteps: RecipeStepsProps;
}

interface RecipeDirectionProps {
  directionTitle: string;
  directionDescription: string;
}

export interface RecipeProps {
  id: string;
  recipeName: string;
  auhtor: AuthorProps;
  prepareTime: string;
  cookTime: string;
  recipeCategory: string;
  categoryId: string;
  recipeImage: string;
  nutritionInformation: NutritionInformationProps;
  recipeDescription: string;
  recipeIngredients: RecipeIngredientProps[];
  recipeDirection: RecipeDirectionProps[];
}
