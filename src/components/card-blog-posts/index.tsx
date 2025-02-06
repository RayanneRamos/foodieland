import styles from "./styles.module.scss";
import cardImage from "../../assets/recipes/image-01.png";
import avatarImage from "../../assets/avatar.png";

export function CardBlogPosts() {
  return (
    <div className={styles.container}>
      <img src={cardImage} alt="" />
      <div className={styles.cardInfo}>
        <strong className={styles.cardTitle}>
          Crochet Projects for Noodle Lovers
        </strong>
        <p className={styles.cardSubtitle}>
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim
        </p>
        <div className={styles.cardFooter}>
          <div className={styles.footerAvatar}>
            <img src={avatarImage} alt="" className={styles.avtarImage} />
            <span className={styles.avatarName}>Wade Warren</span>
          </div>
          <div className={styles.separator} />
          <span className={styles.date}>12 November 2021</span>
        </div>
      </div>
    </div>
  );
}
