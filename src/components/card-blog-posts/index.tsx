import styles from "./styles.module.scss";

interface CardBlogPostsInterface {
  blogRecipes: {
    id: string;
    image: string;
    recipeTitle: string;
    recipeDescription: string;
    author: {
      image: string;
      name: string;
    };
    date: string;
  };
}

export function CardBlogPosts({ blogRecipes }: CardBlogPostsInterface) {
  return (
    <div className={styles.container}>
      <img src={blogRecipes.image} alt={blogRecipes.recipeTitle} />
      <div className={styles.cardInfo}>
        <strong className={styles.cardTitle}>{blogRecipes.recipeTitle}</strong>
        <p className={styles.cardSubtitle}>{blogRecipes.recipeDescription}</p>
        <div className={styles.cardFooter}>
          <div className={styles.footerAvatar}>
            <img
              src={blogRecipes.author.image}
              alt={blogRecipes.author.name}
              className={styles.avtarImage}
            />
            <span className={styles.avatarName}>{blogRecipes.author.name}</span>
          </div>
          <div className={styles.separator} />
          <span className={styles.date}>{blogRecipes.date}</span>
        </div>
      </div>
    </div>
  );
}
