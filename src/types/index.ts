interface AuthorProps {
  authorAvatar?: string;
  authorName?: string;
  authorDatePosted?: string;
}

interface NutritionInformationProps {
  calories?: string;
  totalFat?: string;
  protein?: string;
  carbohydrate?: string;
  cholesterol?: string;
}

interface IngredientProps {
  ingredientQuantity?: string;
  ingredientName?: string;
}

interface RecipeStepsProps {
  name?: string;
  steps?: IngredientProps[];
}

interface RecipeIngredientProps {
  recipeSteps?: RecipeStepsProps;
}

interface RecipeDirectionProps {
  directionTitle?: string;
  directionDescription?: string;
}

export interface RecipeProps {
  id?: string;
  recipeName?: string;
  author?: AuthorProps;
  prepareTime?: string;
  cookTime?: string;
  recipeCategory?: string;
  categoryId?: string;
  authorId?: string;
  recipeImage?: string;
  recipeFavorite?: boolean;
  recipeNutrition?: NutritionInformationProps;
  recipeDescription?: string;
  recipeIngredient?: RecipeIngredientProps[];
  recipeDirection?: RecipeDirectionProps[];
}

interface PostProps {
  postQuestion?: string;
  postAnswer?: string;
}

export interface BlogProps {
  id?: string;
  title: string;
  description?: string;
  author?: AuthorProps;
  blogImage?: string;
  sections?: PostProps[];
  postBlockquote?: string;
}

export interface CategoriesProps {
  id: string;
  categoryImage: string;
  categoryName: string;
  categoryId: string;
}
