import { Clock } from "phosphor-react";
import styles from "./styles.module.scss";

interface RecipeInfoProps {
  title: string;
  subtitle: string;
}

export function RecipeInfo({ title, subtitle }: RecipeInfoProps) {
  return (
    <div className={styles.container}>
      <Clock size={24} weight="fill" color="#000" />
      <div className={styles.info}>
        <span className={styles.title}>{title}</span>
        <span className={styles.subtitle}>{`${subtitle} Minutes`}</span>
      </div>
    </div>
  );
}
