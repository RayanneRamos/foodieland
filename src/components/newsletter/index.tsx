import styles from "./styles.module.scss";
import saladImageOne from "../../assets/salad-01.png";
import saladImageTwo from "../../assets/salad-02.png";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const newsletterSchema = z.object({
  email: z.string().email("The e-mail field is invalid."),
});

type NewsletterSchema = z.infer<typeof newsletterSchema>;

export function Newsletter() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<NewsletterSchema>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: { email: "" },
  });

  function registerNewsletter(data: NewsletterSchema) {
    const email = data.email.trim();

    if (!email) {
      console.log("Invalid e-mail!");
      return;
    }

    const storedEmails = localStorage.getItem("newsletterEmails");
    const emailList: string[] = storedEmails ? JSON.parse(storedEmails) : [];

    if (emailList.includes(email)) {
      console.log("E-mail already registered!");
      return;
    }

    emailList.push(email);
    localStorage.setItem("newsletterEmails", JSON.stringify(emailList));

    console.log("E-mail registered successfully!");

    reset();
  }

  return (
    <div className={styles.container}>
      <img src={saladImageOne} alt="salad-01" className={styles.imageOne} />
      <div className={styles.content}>
        <strong className={styles.title}>Deliciousness to your inbox</strong>
        <span className={styles.subtitle}>
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim ad minim{" "}
        </span>
        <form
          onSubmit={handleSubmit(registerNewsletter)}
          className={styles.form}
        >
          <input
            className={styles.inputEmail}
            type="text"
            placeholder="Your email address..."
            {...register("email")}
          />
          <button className={styles.button}>Subscribe</button>
        </form>
        {errors.email && <p className={styles.error}>{errors.email.message}</p>}
      </div>
      <img src={saladImageTwo} alt="salad-02" className={styles.imageTwo} />
    </div>
  );
}
