import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
import '../../../assets/contact/emailIcon.png'
export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl('../../../assets/contact/emailIcon.png ')} alt="Email icon" />
          <a href="mailto:borhadegaurav0@gmail.com">borhadegaurav0@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("'../../../assets/contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/gaurav-borhade">linkedin.com/gaurav-borhade</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("'../../../assets/contact/githubIcon.png")} alt="Github icon" />
          <a href="https://www.github.com/gauravborhade-0">github.com/gauravborhade-0</a>
        </li>
      </ul>
    </footer>
  );
};