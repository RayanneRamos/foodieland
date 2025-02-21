import * as Icons from "phosphor-react";
import styles from "./styles.module.scss";

interface LabelProps {
  icon: keyof typeof Icons;
  name?: string;
}

export function Label({ icon, name }: LabelProps) {
  const Icon = Icons[icon] as React.ElementType;

  return (
    <div className={styles.container}>
      <Icon size={24} weight="fill" />
      <span className={styles.name}>{name}</span>
    </div>
  );
}
