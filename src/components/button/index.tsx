import styles from "./styles.module.scss";
import * as Icons from 'phosphor-react'

interface ButtonProps {
  icon?: keyof typeof Icons;
  name: string
}

export function Button({ icon, name }: ButtonProps) {
  const Icon = icon ? Icons[icon] as React.ElementType : null;

  return (
    <button className={styles.container}>
      <span className={styles.name}>{name}</span>
      {Icon && <Icon size={24} weight="fill" />}
    </button>
  );
}
