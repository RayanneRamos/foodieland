import styles from "./styles.module.scss";
import * as Icons from "phosphor-react";

interface RecipeFoodProps {
  icon: keyof typeof Icons;
  name: string;
}

export function RecipeFood({ icon, name }: RecipeFoodProps) {
  const Icon = Icons[icon] as React.ElementType;

  return (
    <div className={styles.container}>
      <Icon size={24} weight="fill" />
      <span className={styles.name}>{name}</span>
    </div>
  );
}
