import { useNavigate } from "react-router";
import { Category } from "../../components/category";
import { Divider } from "../../components/divider";
import { Footer } from "../../components/footer";
import { Navigation } from "../../components/navigation";
import { Newsletter } from "../../components/newsletter";
import styles from "./styles.module.scss";
import * as motion from "motion/react-client";
import { Title } from "../../components/title";
import { useQuery } from "@tanstack/react-query";
import {
  Categories as typeCategories,
  fetchCategories,
} from "../../services/fetch-categories";

export function Categories() {
  const navigate = useNavigate();
  const {
    data: categories,
    isLoading,
    error,
  } = useQuery<typeCategories[]>({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  if (isLoading) {
    return <p>Carregando...</p>;
  }

  if (error instanceof Error) {
    return <p>Erro: {error.message}</p>;
  }

  return (
    <div className={styles.container}>
      <Navigation />
      <Divider />
      <div className={styles.main}>
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "anticipate" }}
          className={styles.title}
        >
          <Title>Categories</Title>
        </motion.h1>
        <div className={styles.categoriesContainer}>
          {categories?.map((category) => {
            return (
              <Category
                image={`http://localhost:3333${category.categoryImage}`}
                name={category.categoryName}
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
