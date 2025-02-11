import { Divider } from "../../components/divider";
import { Navigation } from "../../components/navigation";
import styles from "./styles.module.scss";
import chefContactImage from "../../assets/chef-contact.png";

export function Contact() {
  return (
    <div className={styles.container}>
      <Navigation />
      <Divider />
      <div className={styles.main}>
        <h1 className={styles.title}>Contact us</h1>
        <div className={styles.mainContent}>
          <img src={chefContactImage} alt="" />
          <div className={styles.form}>
            <div className={styles.formContainer}>
              <div className={styles.formContent}>
                <label className={styles.labelName}>Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name..."
                  className={styles.input}
                />
              </div>
              <div className={styles.formContent}>
                <label className={styles.labelName}>Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your email address..."
                  className={styles.input}
                />
              </div>
            </div>
            <div className={styles.formContainer}>
              <div className={styles.formContent}>
                <label className={styles.labelName}>Subject</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Enter subject..."
                  className={styles.input}
                />
              </div>
              <div className={styles.formContent}>
                <label className={styles.labelName}>Enquiry Type</label>
                <select className={styles.select} name="select">
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
              </div>
            </div>
            <div className={styles.messageBox}>
              <label className={styles.labelName}>Messages</label>
              <textarea
                placeholder="Enter your messages..."
                className={styles.textarea}
              />
            </div>
            <button className={styles.formButton}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}
