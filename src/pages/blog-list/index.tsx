/* eslint-disable react-hooks/exhaustive-deps */
import { CardBlogPosts } from "../../components/card-blog-posts";
import { Divider } from "../../components/divider";
import { IngredientsCards } from "../../components/ingredients-cards";
import { Navigation } from "../../components/navigation";
import adsImage from "../../assets/recipes/image-06.png";
import styles from "./styles.module.scss";
import { Pagination } from "../../components/pagination";
import { Newsletter } from "../../components/newsletter";
import { Footer } from "../../components/footer";
import { useEffect, useState } from "react";
import { recipes } from "../../utils/recipes";
import { blog } from "../../utils/blog";
import { BlogProps } from "../../types";
import { CardSearchNews } from "../../components/search-card";
import * as motion from "motion/react-client";

const itemsPerPage = 6;

export function BlogList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredNews, setFilteredNews] = useState<BlogProps[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  function handleSearch() {
    if (searchTerm.trim() !== "") {
      const filtered = blog.filter(
        (news) =>
          news.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          news.description.toLowerCase().includes(searchTerm.toLowerCase()) // ✅ Aqui faltava um return implícito
      );
      setFilteredNews(filtered);
      setCurrentPage(1);
    } else {
      setFilteredNews([]);
      setCurrentPage(1);
    }
  }

  const currentData =
    searchTerm && filteredNews.length > 0 ? filteredNews : blog;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentPosts = currentData.slice(startIndex, endIndex);

  const totalPages = Math.ceil(currentData.length / itemsPerPage);

  useEffect(() => {
    handleSearch();
  }, [searchTerm]);

  return (
    <div className={styles.container}>
      <Navigation />
      <Divider />
      <div className={styles.header}>
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "anticipate" }}
          className={styles.headerTitle}
        >
          Blog & Article
        </motion.h1>
        <p className={styles.headerSubtitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore
        </p>
        <div className={styles.form}>
          <input
            className={styles.inputEmail}
            name="search"
            type="text"
            placeholder="Search title, news or recipe..."
            onChange={(event) => setSearchTerm(event.target.value)}
            value={searchTerm}
          />
          <button
            type="submit"
            className={styles.button}
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.posts}>
          {currentPosts.map((blog) =>
            searchTerm && filteredNews.length > 0 ? (
              <CardSearchNews news={blog} key={blog.id} />
            ) : (
              <CardBlogPosts blog={blog} key={blog.id} />
            )
          )}
        </div>
        <div className={styles.tastyRecipes}>
          <strong className={styles.tastyRecipesTitle}>Tasty Recipes</strong>
          <div className={styles.tastyRecipesPosts}>
            {recipes.slice(0, 3).map((othersRecipe) => {
              return (
                <IngredientsCards
                  othersRecipe={othersRecipe}
                  key={othersRecipe.id}
                />
              );
            })}
          </div>
          <img src={adsImage} alt="" className={styles.adsImage} />
        </div>
      </div>
      <div className={styles.paginationSection}>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
      <div className={styles.newsletterSection}>
        <Newsletter />
      </div>
      <div className={styles.footerSection}>
        <Footer />
      </div>
    </div>
  );
}
