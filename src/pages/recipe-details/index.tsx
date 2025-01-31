import { ActionButton } from "../../components/action-button";
import { Avatar } from "../../components/avatar";
import { Divider } from "../../components/divider";
import { Label } from "../../components/label";
import { Navigation } from "../../components/navigation";
import { RecipeInfo } from "../../components/recipe-info";
import { VerticalDivider } from "../../components/vertical-divider";
import styles from "./styles.module.scss";

export function RecipeDetails() {
  return (
    <div className={styles.container}>
      <Navigation />
      <Divider />
      <div className={styles.main}>
        <div className={styles.headerContainer}>
          <div className={styles.headerContent}>
            <h1 className={styles.headerTitle}>Health Japanese Fried Rice</h1>
            <div className={styles.headerInfo}>
              <Avatar />
              <VerticalDivider />
              <RecipeInfo title="prep time" subtitle="15" />
              <VerticalDivider />
              <RecipeInfo title="cook time" subtitle="15" />
              <VerticalDivider />
              <Label icon="ForkKnife" name="Chicken" />
            </div>
          </div>
          <div className={styles.actionButton}>
            <ActionButton icon="Printer" name="print" />
            <ActionButton icon="Export" name="share" />
          </div>
        </div>
      </div>
    </div>
  );
}
