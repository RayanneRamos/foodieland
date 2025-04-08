import { Link } from "react-router-dom";
import { BlogProps } from "../../types";
import styles from "./styles.module.scss";
import * as motion from "motion/react-client";

interface CardSearchNewsProps {
  news?: BlogProps;
}

export function CardSearchNews({ news }: CardSearchNewsProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={styles.container}
    >
      <img
        src={news?.blogImage}
        alt={news?.title}
        className={styles.imagePost}
      />
      <div className={styles.cardInfo}>
        <Link to={`/blog-post/${news?.id}`} className={styles.link}>
          <motion.strong
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "anticipate" }}
            className={styles.cardTitle}
          >
            {news?.title}
          </motion.strong>
        </Link>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className={styles.cardSubtitle}
        >
          {news?.description}
        </motion.p>
        <div className={styles.cardFooter}>
          <div className={styles.footerAvatar}>
            <img
              src={news?.author?.authorAvatar}
              alt={news?.author?.authorName}
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
              {news?.author?.authorName}
            </motion.span>
          </div>
          <div className={styles.separator} />
          <span className={styles.date}>{news?.author?.authorDatePosted}</span>
        </div>
      </div>
    </motion.div>
  );
}
