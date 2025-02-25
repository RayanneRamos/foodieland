import { Link } from "react-router";
import { BlogProps } from "../../types";
import styles from "./styles.module.scss";
import * as motion from "motion/react-client";

interface CardBlogPostsInterface {
  blog?: BlogProps;
}

export function CardBlogPosts({ blog }: CardBlogPostsInterface) {
  return (
    <div className={styles.container}>
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
        <p className={styles.cardSubtitle}>{blog?.description}</p>
        <div className={styles.cardFooter}>
          <div className={styles.footerAvatar}>
            <img
              src={blog?.author?.authorAvatar}
              alt={blog?.author?.authorName}
              className={styles.avatarImage}
            />
            <span className={styles.avatarName}>
              {blog?.author?.authorName}
            </span>
          </div>
          <div className={styles.separator} />
          <span className={styles.date}>{blog?.author?.authorDatePosted}</span>
        </div>
      </div>
    </div>
  );
}
