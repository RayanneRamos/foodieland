import { Divider } from "../../components/divider";
import { Navigation } from "../../components/navigation";
import styles from "./styles.module.scss";
import avatarImage from "../../assets/avatar.png";
import blogPostImage from "../../assets/blog-post-image.png";
import postImage from "../../assets/direction-image.png";
import facebookImage from "../../assets/facebook.svg";
import twitterImage from "../../assets/twitter.svg";
import instagramImage from "../../assets/instagram.svg";
import { Newsletter } from "../../components/newsletter";
import { CardOtherRecipes } from "../../components/card-other-recipes";
import { Footer } from "../../components/footer";
import { recipes } from "../../utils/recipes";

export function BlogPost() {
  return (
    <div className={styles.container}>
      <Navigation />
      <Divider />
      <div className={styles.main}>
        <h1 className={styles.title}>
          Full Guide to Becoming a Professional Chef
        </h1>
        <div className={styles.headerInfo}>
          <div className={styles.headerAvatar}>
            <img src={avatarImage} alt="" className={styles.avatarImage} />
            <span className={styles.avatarName}>John Smith</span>
          </div>
          <div className={styles.separator} />
          <span className={styles.date}>15 March 2022</span>
        </div>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac
          ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula
          sed velit a faucibus. In feugiat vestibulum velit vel pulvinar.
        </p>
        <img src={blogPostImage} alt="" className={styles.imagePost} />
        <div className={styles.blogPostContainer}>
          <div className={styles.blogPostContent}>
            <div className={styles.blogPostOne}>
              <strong className={styles.blogPostTitle}>
                How did you start out in the food industry?
              </strong>
              <p className={styles.blogPostDescription}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur ac ultrices odio. Nulla at congue diam, at dignissim
                turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum
                velit vel pulvinar. Fusce id mollis ex. Praesent feugiat
                elementum ex ut suscipit.
              </p>
            </div>
            <div className={styles.blogPostTwo}>
              <strong className={styles.blogPostTitle}>
                What do you like most about your job?
              </strong>
              <p className={styles.blogPostDescription}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur ac ultrices odio. Nulla at congue diam, at dignissim
                turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum
                velit vel pulvinar. Fusce id mollis ex. Praesent feugiat
                elementum ex ut suscipit.
              </p>
            </div>
            <div className={styles.blogPostThree}>
              <strong className={styles.blogPostTitle}>
                Do you cook at home on your days off?
              </strong>
              <img src={postImage} alt="" className={styles.blogImage} />
              <p className={styles.blogPostDescription}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur ac ultrices odio. Nulla at congue diam, at dignissim
                turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum
                velit vel pulvinar. Fusce id mollis ex. Praesent feugiat
                elementum ex ut suscipit.
              </p>
            </div>
            <div className={styles.blogPostFour}>
              <strong className={styles.blogPostTitle}>
                What would your advice be to young people looking to get their
                foot in the door?
              </strong>
              <p className={styles.blogPostDescription}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur ac ultrices odio. Nulla at congue diam, at dignissim
                turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum
                velit vel pulvinar. Fusce id mollis ex. Praesent feugiat
                elementum ex ut suscipit.
              </p>
            </div>
            <div className={styles.blogQuote}>
              <p className={styles.quoteText}>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur ac ultrices odio.”
              </p>
            </div>
            <div className={styles.blogPostFive}>
              <strong className={styles.blogPostTitle}>
                What is the biggest misconception that people have about being a{" "}
                <br />
                professional chef?
              </strong>
              <p className={styles.blogPostDescription}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur ac ultrices odio. Nulla at congue diam, at dignissim
                turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum
                velit vel pulvinar. Fusce id mollis ex. Praesent feugiat
                elementum ex ut suscipit.
              </p>
            </div>
          </div>
          <div className={styles.sharePost}>
            <p className={styles.socialText}>Share this on:</p>
            <div className={styles.socialMediaContent}>
              <img src={facebookImage} alt="" />
              <img src={twitterImage} alt="" />
              <img src={instagramImage} alt="" />
            </div>
          </div>
        </div>
        <div className={styles.newsletterSection}>
          <Newsletter />
        </div>
        <div className={styles.recipeContainer}>
          <strong className={styles.recipeTitle}>
            Check out the delicious recipe
          </strong>
          <div className={styles.deliciousRecipe}>
            {recipes.slice(0, 4).map((recipe) => {
              return <CardOtherRecipes moreRecipe={recipe} key={recipe.id} />;
            })}
          </div>
        </div>
        <div className={styles.footer}>
          <Footer />
        </div>
      </div>
    </div>
  );
}
