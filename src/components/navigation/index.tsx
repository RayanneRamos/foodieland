import styles from "./styles.module.scss";
import logoImage from "../../assets/logo.svg";
import facebookImage from "../../assets/facebook.svg";
import twitterLogo from "../../assets/twitter.svg";
import instagramLogo from "../../assets/instagram.svg";
import { Link } from "react-router-dom";
import * as motion from "motion/react-client";

export function Navigation() {
  return (
    <div className={styles.container}>
      <img src={logoImage} alt="logo" />
      <nav className={styles.navbar}>
        <Link to="/" className={styles.navLink}>
          <span className={styles.navName}>Home</span>
        </Link>
        <Link to="/recipes" className={styles.navLink}>
          <span className={styles.navName}>Recipes</span>
        </Link>
        <Link to="/blog-list" className={styles.navLink}>
          <span className={styles.navName}>Blog</span>
        </Link>
        <Link to="/contact" className={styles.navLink}>
          <span className={styles.navName}>Contact</span>
        </Link>
        <Link to="/about-us" className={styles.navLink}>
          <span className={styles.navName}>About us</span>
        </Link>
      </nav>
      <div className={styles.socialMedia}>
        <a href="#" className={styles.navSocial}>
          <motion.img
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            src={facebookImage}
            alt="facebook-logo"
          />
        </a>
        <a href="#" className={styles.navSocial}>
          <motion.img
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            src={twitterLogo}
            alt="twitter-logo"
          />
        </a>
        <a href="#" className={styles.navSocial}>
          <motion.img
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            src={instagramLogo}
            alt="instagram-logo"
          />
        </a>
      </div>
    </div>
  );
}
