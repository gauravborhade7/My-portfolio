// import React from "react";
import '../../../assets/skills/html.png'
import styles from "./Hero.module.css";
import { getImageUrl } from '../../utils';
// import { jsPDF } from "jspdf";

export const Hero = () => {
    const handleOpenResume = () => {
      const resumeUrl = "'../../../assets/hero/my-Resume.pdf"; // Path to your resume (Place in 'public' folder)
      window.open(resumeUrl, "_blank"); // Open in new tab
    };

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, {"I'm"} Gaurav</h1>
        <p className={styles.description}>
        A full-stack developer dedicated to building creative web solutions.
        </p>
        <div>
            <button onClick={handleOpenResume} className={styles.contactBtn}>Download Resume</button>
        </div>
      </div>
      <img
        src={getImageUrl('../../../assets/hero/myy.png')}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};