import { ButtonHTMLAttributes } from "react";
import styles from "./styles.module.scss";

interface CategoryProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  image: string;
  name: string;
}

export function Category({ image, name, ...props }: CategoryProps) {
  return (
    <button className={styles.container} {...props}>
      <img src={image} alt="" />
      <span className={styles.name}>{name}</span>
    </button>
  );
}
