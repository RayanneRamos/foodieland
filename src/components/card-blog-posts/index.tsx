import { BlogProps } from "../../types";
import styles from "./styles.module.scss";

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
        <strong className={styles.cardTitle}>{blog?.title}</strong>
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
