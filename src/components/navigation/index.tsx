import styles from "./styles.module.scss";
import logoImage from "../../assets/logo.svg";
import facebookImage from "../../assets/facebook.svg";
import twitterLogo from "../../assets/twitter.svg";
import instagramLogo from "../../assets/instagram.svg";

export function Navigation() {
  return (
    <div className={styles.container}>
      <img src={logoImage} alt="logo" />
      <nav className={styles.navbar}>
        <a href="#" className={styles.navLink}>
          <span className={styles.navName}>Home</span>
        </a>
        <a href="#" className={styles.navLink}>
          <span className={styles.navName}>Recipes</span>
        </a>
        <a href="#" className={styles.navLink}>
          <span className={styles.navName}>Blog</span>
        </a>
        <a href="#" className={styles.navLink}>
          <span className={styles.navName}>Contact</span>
        </a>
        <a href="#" className={styles.navLink}>
          <span className={styles.navName}>About us</span>
        </a>
      </nav>
      <div className={styles.socialMedia}>
        <a href="#" className={styles.navSocial}>
          <img src={facebookImage} alt="facebook-logo" />
        </a>
        <a href="#" className={styles.navSocial}>
          <img src={twitterLogo} alt="twitter-logo" />
        </a>
        <a href="#" className={styles.navSocial}>
          <img src={instagramLogo} alt="instagram-logo" />
        </a>
      </div>
    </div>
  );
}
