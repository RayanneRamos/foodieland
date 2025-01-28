import styles from "./styles.module.scss";
import avatarImage from "../../assets/avatar.png";

export function Avatar() {
  return (
    <div className={styles.container}>
      <img src={avatarImage} alt="avatar-image" />
      <div className={styles.avatarInfo}>
        <span className={styles.name}>John Smith</span>
        <span className={styles.date}>15 March 2022</span>
      </div>
    </div>
  );
}
