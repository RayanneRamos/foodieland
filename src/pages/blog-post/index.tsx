import { Divider } from "../../components/divider";
import { Navigation } from "../../components/navigation";
import styles from "./styles.module.scss";
import postImage from "../../assets/direction-image.png";
import facebookImage from "../../assets/facebook.svg";
import twitterImage from "../../assets/twitter.svg";
import instagramImage from "../../assets/instagram.svg";
import { Newsletter } from "../../components/newsletter";
import { CardOtherRecipes } from "../../components/card-other-recipes";
import { Footer } from "../../components/footer";
import { useParams } from "react-router";
import * as motion from "motion/react-client";
import { useShuffleRecipes } from "../../hooks/useShuffleRecipes";
import { useQuery } from "@tanstack/react-query";
import { BlogProps } from "../../types";
import { fetchBlogPosts } from "../../services/fetch-blog-posts";
import { formattedDate } from "../../utils/formatted-date";
import { Loading } from "../../components/loading";

export function BlogPost() {
  const { data: posts } = useQuery<BlogProps[]>({
    queryKey: ["blog-posts"],
    queryFn: fetchBlogPosts,
  });

  const { id } = useParams<{ id: string }>();

  const blogPosts = posts?.find((searchPosts) => searchPosts?.id === id);
  const { shuffledRecipes, isLoading: isLoadingRecipes } = useShuffleRecipes();

  if (!blogPosts) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Navigation />
      <Divider />
      <div className={styles.main}>
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "anticipate" }}
          className={styles.title}
        >
          {blogPosts.title}
        </motion.h1>
        <div className={styles.headerInfo}>
          <div className={styles.headerAvatar}>
            <img
              src={`http://localhost:3333${blogPosts.author?.authorAvatar}`}
              alt={blogPosts.author?.authorName}
              className={styles.avatarImage}
            />
            <motion.span
              animate={{ scale: [1, 1.05, 1] }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut",
              }}
              className={styles.avatarName}
            >
              {blogPosts.author?.authorName}
            </motion.span>
          </div>
          <div className={styles.separator} />
          <span className={styles.date}>
            {formattedDate(blogPosts.author?.authorDatePosted)}
          </span>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className={styles.description}
        >
          {blogPosts.description}
        </motion.p>
        <img
          src={`http://localhost:3333${blogPosts.blogImage}`}
          alt={blogPosts.title}
          className={styles.imagePost}
        />
        <div className={styles.blogPostContainer}>
          <div className={styles.blogPostContent}>
            <div className={styles.blogPostOne}>
              {blogPosts.sections?.map((post, index) => {
                return (
                  <>
                    <motion.strong
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.8, ease: "anticipate" }}
                      className={styles.blogPostTitle}
                    >
                      {post.postQuestion}
                    </motion.strong>
                    {index === 2 && (
                      <img
                        src={postImage}
                        alt=""
                        className={styles.blogImage}
                      />
                    )}
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1 }}
                      className={styles.blogPostDescription}
                    >
                      {post.postAnswer}
                    </motion.p>
                    {index === 3 && (
                      <div className={styles.blogQuote}>
                        <motion.p
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 1 }}
                          className={styles.quoteText}
                        >
                          {`"${blogPosts.postBlockquote}"`}
                        </motion.p>
                      </div>
                    )}
                  </>
                );
              })}
            </div>
          </div>
          <div className={styles.sharePost}>
            <motion.p className={styles.socialText}>Share this on:</motion.p>
            <div className={styles.socialMediaContent}>
              <motion.img
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                src={facebookImage}
                alt="facebook"
                aria-label="facebook"
              />
              <motion.img
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                src={twitterImage}
                alt="twitter"
                aria-label="twitter"
              />
              <motion.img
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                src={instagramImage}
                alt="instagram"
                aria-label="instagram"
              />
            </div>
          </div>
        </div>
        <div className={styles.newsletterSection}>
          <Newsletter />
        </div>
        <div className={styles.recipeContainer}>
          <motion.strong
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "anticipate" }}
            className={styles.recipeTitle}
          >
            Check out the delicious recipe
          </motion.strong>
          {isLoadingRecipes ? (
            <Loading />
          ) : (
            <div className={styles.deliciousRecipe}>
              {(shuffledRecipes[4] ?? []).slice(0, 4).map((recipe) => {
                return <CardOtherRecipes moreRecipe={recipe} key={recipe.id} />;
              })}
            </div>
          )}
        </div>
        <div className={styles.footer}>
          <Footer />
        </div>
      </div>
    </div>
  );
}
