import * as Icons from "phosphor-react";
import styles from "./styles.module.scss";

interface ActionButtonProps {
  icon: keyof typeof Icons;
  name: string;
}

export function ActionButton({ icon, name }: ActionButtonProps) {
  const Icon = Icons[icon] as React.ElementType;

  return (
    <div className={styles.container}>
      <button className={styles.button}>
        <Icon size={24} weight="regular" />
      </button>
      <span className={styles.name}>{name}</span>
    </div>
  );
}
