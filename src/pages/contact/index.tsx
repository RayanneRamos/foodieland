import { Divider } from "../../components/divider";
import { Navigation } from "../../components/navigation";
import styles from "./styles.module.scss";
import chefContactImage from "../../assets/chef-contact.png";
import { Newsletter } from "../../components/newsletter";
import { Footer } from "../../components/footer";
import { CardOtherRecipes } from "../../components/card-other-recipes";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import * as motion from "motion/react-client";
import { Title } from "../../components/title";
import { useShuffleRecipes } from "../../hooks/useShuffleRecipes";

const contactSchema = z.object({
  name: z.string().min(2, "The name field cannot be blank."),
  email: z.string().email("The e-mail field is invalid."),
  subject: z.string().min(2, "The subject field cannot be blank."),
  options: z.string().min(1, "You need to select option."),
  message: z.string().min(12, "The message field must contain 12 characters."),
});

type ContactSchema = z.infer<typeof contactSchema>;

export function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactSchema>({
    resolver: zodResolver(contactSchema),
  });
  const shuffledRecipes = useShuffleRecipes();

  function handleSendMessage(data: ContactSchema) {
    const storedMessages = localStorage.getItem("contactMessages");
    const messageList: ContactSchema[] = storedMessages
      ? JSON.parse(storedMessages)
      : [];

    messageList.push(data);

    localStorage.setItem("contactMessages", JSON.stringify(messageList));

    toast.success("Message saved successfully!");

    reset();
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
          <Title>Contact us</Title>
        </motion.h1>
        <div className={styles.mainContent}>
          <img src={chefContactImage} alt="" />
          <form
            onSubmit={handleSubmit(handleSendMessage)}
            className={styles.form}
          >
            <div className={styles.formContainer}>
              <div className={styles.formContent}>
                <label className={styles.labelName}>Name</label>
                <input
                  type="text"
                  placeholder="Enter your name..."
                  className={styles.input}
                  {...register("name")}
                />
                {errors.name && (
                  <p className={styles.error}>{errors.name.message}</p>
                )}
              </div>
              <div className={styles.formContent}>
                <label className={styles.labelName}>Email Address</label>
                <input
                  type="text"
                  placeholder="Your email address..."
                  className={styles.input}
                  {...register("email")}
                />
                {errors.email && (
                  <p className={styles.error}>{errors.email.message}</p>
                )}
              </div>
            </div>
            <div className={styles.formContainer}>
              <div className={styles.formContent}>
                <label className={styles.labelName}>Subject</label>
                <input
                  type="text"
                  placeholder="Enter subject..."
                  className={styles.input}
                  {...register("subject")}
                />
                {errors.subject && (
                  <p className={styles.error}>{errors.subject.message}</p>
                )}
              </div>
              <div className={styles.formContent}>
                <label className={styles.labelName}>Enquiry Type</label>
                <select className={styles.select} {...register("options")}>
                  <option value="">Choose an option</option>
                  <option value="advertising">Advertising</option>
                  <option value="ad-placement">Ad Placement</option>
                  <option value="sponsored-content">Sponsored Content</option>
                  <option value="influencer-collaboration">
                    Influencer Collaboration
                  </option>
                  <option value="media-kit-request">Media Kit Request</option>
                  <option value="pricing-and-packages">
                    Pricing & Packages
                  </option>
                  <option value="ad-performance-report">
                    Ad Performance Report
                  </option>
                  <option value="custom-campaigns">Custom Campaigns</option>
                  <option value="programmatic-advertising">
                    Programmatic Advertising
                  </option>
                  <option value="brand-partnership">Brand Partnership</option>
                  <option value="affiliate-marketing">
                    Affiliate Marketing
                  </option>
                  <option value="other">Other</option>
                </select>
                {errors.options && (
                  <p className={styles.error}>{errors.options.message}</p>
                )}
              </div>
            </div>
            <div className={styles.messageBox}>
              <label className={styles.labelName}>Messages</label>
              <textarea
                placeholder="Enter your messages..."
                className={styles.textarea}
                {...register("message")}
              />
              {errors.message && (
                <p className={styles.error}>{errors.message.message}</p>
              )}
            </div>
            <button className={styles.formButton}>Submit</button>
          </form>
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
        <div className={styles.recipeContent}>
          {shuffledRecipes.slice(0, 4).map((recipe) => {
            return <CardOtherRecipes moreRecipe={recipe} key={recipe.id} />;
          })}
        </div>
      </div>
      <div className={styles.footerSection}>
        <Footer />
      </div>
    </div>
  );
}
