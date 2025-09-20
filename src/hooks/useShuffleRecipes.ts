import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { RecipeProps } from "../types";
import { fetchRecipes } from "../services/fetch-recipes";

function shuffleArray<T>(array: T[]): T[] {
  return [...array].sort(() => Math.random() - 0.5);
}

export function useShuffleRecipes(sections = 2) {
  const {
    data: recipes = [],
    isLoading,
    isError,
  } = useQuery<RecipeProps[]>({
    queryKey: ["recipes"],
    queryFn: fetchRecipes,
  });

  const shuffledRecipes = useMemo(() => {
    return Array.from({ length: sections }, () => {
      let shuffled = shuffleArray(recipes);

      while (recipes.length > 1 && shuffled.every((r, i) => r === recipes[i])) {
        shuffled = shuffleArray(recipes);
      }

      return shuffled;
    });
  }, [recipes, sections]);

  return { shuffledRecipes, isLoading, isError };
}
