import styles from "./styles.module.scss";

interface CategoryProps {
  image: string;
  name: string;
}

export function Category({ image, name }: CategoryProps) {
  return (
    <button className={styles.container}>
      <img src={image} alt="" />
      <span className={styles.name}>{name}</span>
    </button>
  );
}
