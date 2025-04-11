import { Heart } from "phosphor-react";
import styles from "./styles.module.scss";
import { ButtonHTMLAttributes } from "react";

interface FavoriteButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isFavorite: boolean;
  toggleFavorite: () => void;
}

export function FavoriteButton({
  isFavorite,
  toggleFavorite,
  ...props
}: FavoriteButtonProps) {
  return (
    <button
      className={styles.container}
      onClick={(event) => {
        event.preventDefault();
        toggleFavorite();
      }}
      aria-label="favorite"
      aria-pressed={isFavorite}
      {...props}
    >
      <Heart size={24} weight="fill" color={isFavorite ? "#ff6363" : "#ccc"} />
    </button>
  );
}
