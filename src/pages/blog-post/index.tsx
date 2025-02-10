import { Divider } from "../../components/divider";
import { Navigation } from "../../components/navigation";
import styles from "./styles.module.scss";
import avatarImage from "../../assets/avatar.png";
import blogPostImage from "../../assets/blog-post-image.png";
export function BlogPost() {
  return (
    <div className={styles.container}>
      <Navigation />
      <Divider />
      <div className={styles.main}>
        <h1 className={styles.title}>
          Full Guide to Becoming a Professional Chef
        </h1>
        <div className={styles.headerInfo}>
          <div className={styles.headerAvatar}>
            <img src={avatarImage} alt="" className={styles.avatarImage} />
            <span className={styles.avatarName}>John Smith</span>
          </div>
          <div className={styles.separator} />
          <span className={styles.date}>15 March 2022</span>
        </div>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac
          ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula
          sed velit a faucibus. In feugiat vestibulum velit vel pulvinar.
        </p>
        <img src={blogPostImage} alt="" className={styles.imagePost} />
      </div>
    </div>
  );
}
