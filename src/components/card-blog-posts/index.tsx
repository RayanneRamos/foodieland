import { Link } from "react-router-dom";
import { BlogProps } from "../../types";
import styles from "./styles.module.scss";
import * as motion from "motion/react-client";

interface CardBlogPostsInterface {
  blog?: BlogProps;
}

export function CardBlogPosts({ blog }: CardBlogPostsInterface) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={styles.container}
    >
      <img
        src={blog?.blogImage}
        alt={blog?.title}
        className={styles.imagePost}
      />
      <div className={styles.cardInfo}>
        <Link to={`/blog-post/${blog?.id}`} className={styles.link}>
          <motion.strong
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "anticipate" }}
            className={styles.cardTitle}
          >
            {blog?.title}
          </motion.strong>
        </Link>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className={styles.cardSubtitle}
        >
          {blog?.description}
        </motion.p>
        <div className={styles.cardFooter}>
          <div className={styles.footerAvatar}>
            <img
              src={blog?.author?.authorAvatar}
              alt={blog?.author?.authorName}
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
              {blog?.author?.authorName}
            </motion.span>
          </div>
          <div className={styles.separator} />
          <span className={styles.date}>{blog?.author?.authorDatePosted}</span>
        </div>
      </div>
    </motion.div>
  );
}
