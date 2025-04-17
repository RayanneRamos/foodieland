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
import { blog } from "../../utils/blog";
import * as motion from "motion/react-client";
import { useShuffleRecipes } from "../../hooks/useShuffleRecipes";

export function BlogPost() {
  const { id } = useParams<{ id: string }>();

  const blogPosts = blog.find((searchPosts) => searchPosts?.id === id);
  const shuffledRecipes = useShuffleRecipes();

  if (!blogPosts) {
    return (
      <div>
        <h1>Posts not found!</h1>
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
              src={blogPosts.author.authorAvatar}
              alt={blogPosts.author.authorName}
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
              {blogPosts.author.authorName}
            </motion.span>
          </div>
          <div className={styles.separator} />
          <span className={styles.date}>
            {blogPosts.author.authorDatePosted}
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
          src={blogPosts.blogImage}
          alt={blogPosts.title}
          className={styles.imagePost}
        />
        <div className={styles.blogPostContainer}>
          <div className={styles.blogPostContent}>
            <div className={styles.blogPostOne}>
              {blogPosts.posts.map((post, index) => {
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
                      {post.postAnswers}
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
          <div className={styles.deliciousRecipe}>
            {shuffledRecipes.slice(0, 4).map((recipe) => {
              return <CardOtherRecipes moreRecipe={recipe} key={recipe.id} />;
            })}
          </div>
        </div>
        <div className={styles.footer}>
          <Footer />
        </div>
      </div>
    </div>
  );
}
