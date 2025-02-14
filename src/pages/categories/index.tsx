import { useNavigate } from "react-router";
import { Category } from "../../components/category";
import { Divider } from "../../components/divider";
import { Footer } from "../../components/footer";
import { Navigation } from "../../components/navigation";
import { Newsletter } from "../../components/newsletter";
import { categories } from "../../utils/categories";
import styles from "./styles.module.scss";

export function Categories() {
  const navigate = useNavigate();

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
                onClick={() => navigate(`/categories/${category.id}`)}
              />
            );
          })}
        </div>
        <div className={styles.newsletterSection}>
          <Newsletter />
        </div>
        <Footer />
      </div>
    </div>
  );
}
