import PropTypes from "prop-types";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({ project }) => {
  if (!project) return null; // Prevent rendering if project is undefined
  
  const { title, imageSrc, description, skills, demo, source } = project;

  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc) || "default-image.jpg"} // Provide a fallback image
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      
      {skills?.length > 0 && (
        <ul className={styles.skills}>
          {skills.map((skill, index) => (
            <li key={index} className={styles.skill}>
              {skill}
            </li>
          ))}
        </ul>
      )}
      
      <div className={styles.links}>
        {demo && (
          <a href={demo} className={styles.link} target="_blank" rel="noopener noreferrer">
            Live 
          </a>
        )}
        {source && (
          <a href={source} className={styles.link} target="_blank" rel="noopener noreferrer">
            Source 
          </a>
        )}
      </div>
    </div>
  );
};

// PropTypes for validation
ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    imageSrc: PropTypes.string,
    description: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string),
    demo: PropTypes.string,
    source: PropTypes.string,
  }),
};
