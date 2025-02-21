import styles from "./styles.module.scss";
import avatarImage from "../../assets/avatar.png";

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
        <span className={styles.name}>
          {author?.authorName || "John Smith"}
        </span>
        <span className={styles.date}>
          {author?.authorDatePosted || "15 March 2022"}
        </span>
      </div>
    </div>
  );
}
