import { Category } from "../../components/category";
import { Divider } from "../../components/divider";
import { Navigation } from "../../components/navigation";
import { Newsletter } from "../../components/newsletter";
import { categories } from "../../utils/categories";
import styles from "./styles.module.scss";

export function Categories() {
  return (
    <div className={styles.container}>
      <Navigation />
      <Divider />
      <div className={styles.main}>
        <h1 className={styles.title}>Categories</h1>
        <div className={styles.categoriesContainer}>
          {categories.map((category) => {
            return (
              <Category
                image={category.image}
                name={category.name}
                key={category.id}
              />
            );
          })}
        </div>
        <div className={styles.newsletterSection}>
          <Newsletter />
        </div>
      </div>
    </div>
  );
}
