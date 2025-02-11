import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "./pages/home";
import { RecipeDetails } from "./pages/recipe-details";
import { BlogList } from "./pages/blog-list";
import { BlogPost } from "./pages/blog-post";
import { Contact } from "./pages/contact";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe-details/:id" element={<RecipeDetails />} />
        <Route path="/blog-list" element={<BlogList />} />
        <Route path="/blog-post/:id" element={<BlogPost />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
