// import React from "react";
import '../../../assets/about/cursorIcon.png'
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        {/* <img
          src={getImageUrl("../../../assets/about/about.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        /> */}
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl('../../../assets/about/unviversity.png ')} alt="Cursor icon"style={{height:'100px'}} />
            <div className={styles.aboutItemText}>
            <h3>Education</h3><br />
              <p>
                *B.S.C Computer Science (Mumbai University) <br/>
                J.K College Science and technology <br/>
                2022-2023
              </p> <br />
              <p>Karmaveer Bhaurao patil college,Vashi <br />
              Higher Secondary School 12th <br />
              August 2021 - April 2022
              </p><br />
              <p>I.C.L High School Vashi <br />
              State Board Maharashtra 10th <br />
              August 2019 - May 2020
              </p>
            </div>
          </li>
          {/* <li className={styles.aboutItem}>
            <img src={getImageUrl('../../../assets/about/serverIcon.png ')} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and optimised back-end systems
                and APIs
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl('../../../assets/about/cursorIcon.png ')} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                I have designed multiple landing pages and have created design
                systems as well
              </p> */}
            {/* </div> */}
          {/* </li> */}
        </ul>
      </div>
    </section>
  );
};