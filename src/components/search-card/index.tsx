import { Link } from "react-router";
import { BlogProps } from "../../types";
import styles from "./styles.module.scss";

interface CardSearchNewsProps {
  news?: BlogProps;
}

export function CardSearchNews({ news }: CardSearchNewsProps) {
  return (
    <div className={styles.container}>
      <img
        src={news?.blogImage}
        alt={news?.title}
        className={styles.imagePost}
      />
      <div className={styles.cardInfo}>
        <Link to={`/blog-post/${news?.id}`} className={styles.link}>
          <strong className={styles.cardTitle}>{news?.title}</strong>
        </Link>
        <p className={styles.cardSubtitle}>{news?.description}</p>
        <div className={styles.cardFooter}>
          <div className={styles.footerAvatar}>
            <img
              src={news?.author?.authorAvatar}
              alt={news?.author?.authorName}
              className={styles.avatarImage}
            />
            <span className={styles.avatarName}>
              {news?.author?.authorName}
            </span>
          </div>
          <div className={styles.separator} />
          <span className={styles.date}>{news?.author?.authorDatePosted}</span>
        </div>
      </div>
    </div>
  );
}
