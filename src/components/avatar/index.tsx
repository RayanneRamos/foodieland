import { formattedDate } from "../../utils/formatted-date";
import styles from "./styles.module.scss";
import * as motion from "motion/react-client";
import avatarPreview from "../../assets/avatar.png";

interface AvatarProps {
  author?: {
    authorAvatar?: string;
    authorName?: string;
    authorDatePosted?: string;
  };
}

export function Avatar({ author }: AvatarProps) {
  const avatarSrc = author?.authorAvatar
    ? author.authorAvatar.startsWith("http")
      ? author.authorAvatar
      : `http://localhost:3333${author?.authorAvatar}`
    : avatarPreview;

  return (
    <div className={styles.container}>
      <img src={avatarSrc} alt="avatar-image" className={styles.image} />
      <div className={styles.avatarInfo}>
        <motion.span
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className={styles.name}
        >
          {author?.authorName || "John Smith"}
        </motion.span>
        <span className={styles.date}>
          {formattedDate(author?.authorDatePosted)}
        </span>
      </div>
    </div>
  );
}
