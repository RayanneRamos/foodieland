import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "./pages/home";
import { RecipeDetails } from "./pages/recipe-details";
import { BlogList } from "./pages/blog-list";
import { BlogPost } from "./pages/blog-post";
import { Contact } from "./pages/contact";
import { AboutUs } from "./pages/about-us";
import { Recipes } from "./pages/recipes";
import { Categories } from "./pages/categories";
import { CategoriesRecipes } from "./pages/categories-recipes";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe-details/:id" element={<RecipeDetails />} />
        <Route path="/blog-list" element={<BlogList />} />
        <Route path="/blog-post/:id" element={<BlogPost />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:categoryId" element={<CategoriesRecipes />} />
      </Routes>
    </BrowserRouter>
  );
}
