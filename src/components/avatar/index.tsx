import styles from "./styles.module.scss";
import avatarImage from "../../assets/avatar.png";
import * as motion from "motion/react-client";

interface AvatarProps {
  author?: {
    authorAvatar?: string;
    authorName?: string;
    authorDatePosted?: string;
  };
}

export function Avatar({ author }: AvatarProps) {
  return (
    <div className={styles.container}>
      <img
        src={author?.authorAvatar || avatarImage}
        alt="avatar-image"
        className={styles.image}
      />
      <div className={styles.avatarInfo}>
        <motion.span
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className={styles.name}
        >
          {author?.authorName || "John Smith"}
        </motion.span>
        <span className={styles.date}>
          {author?.authorDatePosted || "15 March 2022"}
        </span>
      </div>
    </div>
  );
}
