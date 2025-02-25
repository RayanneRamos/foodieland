import { Divider } from "../../components/divider";
import { Navigation } from "../../components/navigation";
import styles from "./styles.module.scss";
import chefContactImage from "../../assets/chef-contact.png";
import {
  BookOpen,
  CheckSquare,
  Fire,
  GlobeHemisphereEast,
  UsersThree,
  Wine,
} from "phosphor-react";
import { Newsletter } from "../../components/newsletter";
import { CardOtherRecipes } from "../../components/card-other-recipes";
import { Footer } from "../../components/footer";
import { recipes } from "../../utils/recipes";
import * as motion from "motion/react-client";

export function AboutUs() {
  return (
    <div className={styles.container}>
      <Navigation />
      <Divider />
      <div className={styles.main}>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: "easeOut" }}
        >
          About us
        </motion.h1>
        <div className={styles.mainContent}>
          <img src={chefContactImage} alt="" />
          <div className={styles.about}>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className={styles.aboutText}
            >
              Welcome to Foodieland, your ultimate destination for discovering,
              cooking, and sharing delicious recipes! Whether you're a seasoned
              chef or just starting your culinary journey, our platform is
              designed to inspire and guide you through the art of cooking.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className={styles.aboutText}
            >
              At Foodieland, we believe that food brings people together. Our
              mission is to make cooking accessible, enjoyable, and exciting for
              everyone. We curate a diverse collection of recipes from around
              the world, ensuring that you’ll always find something new to
              try—whether it's a comforting home-cooked meal, a quick and
              healthy dish, or an adventurous gourmet experience.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className={styles.aboutText}
            >
              What makes us different?
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className={styles.aboutText}
            >
              <strong className={styles.aboutBold}>
                A Wide Variety of Recipes -{" "}
              </strong>
              From traditional classics to innovative creations, we offer
              recipes for all tastes and skill levels.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className={styles.aboutText}
            >
              <strong className={styles.aboutBold}>
                Step-by-Step Instructions -{" "}
              </strong>
              Our easy-to-follow guides ensure that cooking is fun and
              stress-free.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className={styles.aboutText}
            >
              <strong className={styles.aboutBold}>Community-Driven - </strong>
              Share your favorite recipes, connect with fellow food lovers, and
              get inspired by others
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className={styles.aboutText}
            >
              <strong className={styles.aboutBold}>
                Expert Tips & Tricks -{" "}
              </strong>
              Learn from professional chefs and experienced home cooks to
              elevate your skills.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className={styles.aboutText}
            >
              Join us on this flavorful adventure and turn your kitchen into a
              place of creativity, passion, and, most importantly, delicious
              food!
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className={styles.aboutText}
            >
              Let’s cook something amazing together!
            </motion.p>
          </div>
        </div>
        <div className={styles.moreAbout}>
          <div className={styles.aboutChef}>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, ease: "easeOut" }}
              className={styles.aboutChefTitle}
            >
              Meet Our Chefs
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className={styles.aboutChefText}
            >
              Our recipes are crafted by a diverse team of professional chefs,
              culinary experts, and passionate home cooks who bring their unique
              skills and creativity to the table. Each recipe is carefully
              tested to ensure accuracy, flavor balance, and ease of
              preparation.
            </motion.p>
            <motion.strong
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "anticipate" }}
              className={styles.aboutChefBold}
            >
              What makes our chefs special?
            </motion.strong>
            <motion.strong
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "anticipate" }}
              className={styles.aboutChefBold}
            >
              <CheckSquare size={32} weight="fill" color="#00ff9c" />
              Culinary Expertise
            </motion.strong>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className={styles.aboutChefText}
            >
              Our team includes trained chefs with experience in world-renowned
              kitchens, ensuring high-quality and innovative recipes.
            </motion.p>
            <motion.strong
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "anticipate" }}
              className={styles.aboutChefBold}
            >
              <CheckSquare size={32} weight="fill" color="#00ff9c" />
              Diverse Influences
            </motion.strong>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className={styles.aboutChefText}
            >
              From Italian pasta masters to Asian street food specialists, our
              chefs bring global flavors to your kitchen.
            </motion.p>
            <motion.strong
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "anticipate" }}
              className={styles.aboutChefBold}
            >
              <CheckSquare size={32} weight="fill" color="#00ff9c" />
              Home Cook Insights
            </motion.strong>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className={styles.aboutChefText}
            >
              We also collaborate with experienced home cooks who share
              practical, easy-to-follow recipes for everyday meals.
            </motion.p>
            <motion.strong
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "anticipate" }}
              className={styles.aboutChefBold}
            >
              <CheckSquare size={32} weight="fill" color="#00ff9c" />
              Passion for Teaching
            </motion.strong>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className={styles.aboutChefText}
            >
              Beyond just recipes, our chefs provide cooking tips, ingredient
              substitutions, and step-by-step techniques to elevate your skills.
            </motion.p>
          </div>
          <div className={styles.aboutChooseFoodieland}>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, ease: "easeOut" }}
              className={styles.aboutChooseFoodielandTitle}
            >
              Why Choose Foodieland?
            </motion.h3>
            <motion.strong
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "anticipate" }}
              className={styles.aboutChooseFoodielandBold}
            >
              <GlobeHemisphereEast size={32} weight="fill" color="#3674b5" />A
              World of Recipes
            </motion.strong>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className={styles.aboutChooseFoodielandText}
            >
              Discover everything from traditional classics to trendy new
              dishes, bringing diverse flavors to your kitchen.
            </motion.p>
            <motion.strong
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "anticipate" }}
              className={styles.aboutChooseFoodielandBold}
            >
              <BookOpen size={32} weight="fill" color="#7e99a3" />A Step-by-Step
              Guidance
            </motion.strong>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className={styles.aboutChooseFoodielandText}
            >
              Follow clear instructions with pro tips from our expert chefs to
              make cooking easier and more enjoyable.
            </motion.p>
            <motion.strong
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "anticipate" }}
              className={styles.aboutChooseFoodielandBold}
            >
              <UsersThree size={32} weight="fill" color="#441752" />A
              Community-Driven
            </motion.strong>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className={styles.aboutChooseFoodielandText}
            >
              Share your recipes, get feedback, and connect with food lovers
              worldwide, making cooking a shared experience.
            </motion.p>
            <motion.strong
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "anticipate" }}
              className={styles.aboutChooseFoodielandBold}
            >
              <Fire size={32} weight="fill" color="#C14600" />A Chef's Special
              Picks
            </motion.strong>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className={styles.aboutChooseFoodielandText}
            >
              Enjoy hand-selected, chef-approved recipes that guarantee amazing
              flavors and foolproof results.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className={styles.aboutChooseFoodielandText}
            >
              Whether you're looking for a quick weeknight meal, an impressive
              dinner party dish, or a healthy meal plan, Foodieland is here to
              guide you every step of the way.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className={styles.aboutChooseFoodielandText}
            >
              <Wine size={32} weight="fill" color="#FFF90D" />
              Let’s cook something amazing together!
            </motion.p>
          </div>
        </div>
        <div className={styles.newsletterSection}>
          <Newsletter />
        </div>
        <div className={styles.recipeSection}>
          <motion.strong
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "anticipate" }}
            className={styles.recipeTitle}
          >
            Check out the delicious recipe
          </motion.strong>
          <div className={styles.recipeContainer}>
            {recipes.slice(0, 4).map((recipe) => {
              return <CardOtherRecipes moreRecipe={recipe} key={recipe.id} />;
            })}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
