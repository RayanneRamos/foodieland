import { Navigation } from "../../components/navigation";
import styles from "./styles.module.scss";

export function Home() {
  return (
    <div className={styles.container}>
      <Navigation />
    </div>
  );
}
