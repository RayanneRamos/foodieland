import { Divider } from "../divider";
import styles from "./styles.module.scss";
import logoImage from "../../assets/logo.svg";
import facebookImage from "../../assets/facebook.svg";
import twitterImage from "../../assets/twitter.svg";
import instagramImage from "../../assets/instagram.svg";
import { Link } from "react-router";
import * as motion from "motion/react-client";

export function Footer() {
  return (
    <div className={styles.container}>
      <img src={logoImage} alt="foodieland" />
      <div className={styles.content}>
        <span className={styles.subtitle}>
          Lorem ipsum dolor sit amet, consectetuipisicing elit.
        </span>
        <nav className={styles.footerNav}>
          <Link to="/recipes" className={styles.link}>
            Recipes
          </Link>
          <Link to="/blog-list" className={styles.link}>
            Blog
          </Link>
          <Link to="/contact" className={styles.link}>
            Contact
          </Link>
          <Link to="/about-us" className={styles.link}>
            About us
          </Link>
        </nav>
      </div>
      <Divider />
      <div className={styles.copyright}>
        <div />
        <span className={styles.copyrightText}>
          &copy; 2025 Flowbase. Powered by{" "}
          <span className={styles.highlight}>Webflow</span>
        </span>
        <div className={styles.footerSocialMedia}>
          <motion.img
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            src={facebookImage}
            alt="facebook"
          />
          <motion.img
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            src={twitterImage}
            alt="twitter"
          />
          <motion.img
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            src={instagramImage}
            alt="instagram"
          />
        </div>
      </div>
    </div>
  );
}
