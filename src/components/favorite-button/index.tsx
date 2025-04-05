import { Heart } from "phosphor-react";
import styles from "./styles.module.scss";

export function FavoriteButton() {
  return (
    <button className={styles.container}>
      <Heart size={24} weight="fill" />
    </button>
  );
}
