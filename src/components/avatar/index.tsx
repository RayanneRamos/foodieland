import styles from "./styles.module.scss";
import * as motion from "motion/react-client";

interface AvatarProps {
  author?: {
    authorAvatar?: string;
    authorName?: string;
    authorDatePosted?: string;
  };
}

export function Avatar({ author }: AvatarProps) {
  const formatDate = (dateString?: string) => {
    if (!dateString) {
      return "15 March 2022";
    }

    const date = new Date(dateString);

    return new Intl.DateTimeFormat("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }).format(date);
  };

  return (
    <div className={styles.container}>
      <img
        src={`http://localhost:3333${author?.authorAvatar}`}
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
          {formatDate(author?.authorDatePosted)}
        </span>
      </div>
    </div>
  );
}
