export interface AuthorProps {
  authorAvatar: string;
  authorName: string;
  authorDatePosted: string;
}

export interface NutritionInformationProps {
  calories: string;
  totalFat: string;
  protein: string;
  carbohydrate: string;
  cholesterol: string;
}

export interface IngredientProps {
  ingredientsQuantity: string;
  ingredientsName: string;
}

export interface RecipeStepsProps {
  name: string;
  steps: IngredientProps[];
}
