import { useMemo } from "react";
import { recipes } from "../utils/recipes";

export function useShuffleRecipes() {
  const shuffledRecipes = useMemo(() => {
    return [...recipes].sort(() => Math.random() - 0.5);
  }, []);

  return shuffledRecipes;
}
