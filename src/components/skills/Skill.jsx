// import React from "react";
import PropTypes from "prop-types"; // Import PropTypes
import "./Skills.css"; // Import the CSS file

// Skill Data
const skillsData = {
  frontend: [
    { name: "HTML/CSS", percentage: 95 },
    { name: "JavaScript", percentage: 70 },
    { name: "React.js", percentage: 50 },
    {name: "Java",percentage:80},
  ],
  backend: [
    { name: "Node.js", percentage: 82 },
    { name: "Express.js", percentage: 80 },
    { name: "MongoDB", percentage: 75 },
    { name: "SQL", percentage: 95 },
  ],
};

// SkillBar Component
const SkillBar = ({ name, percentage }) => (
  <div className="skill">
    <p className="skill-name">{name}</p>
    <div className="skill-bar">
      <div className="skill-fill" style={{ width: `${percentage}%` }}></div>
    </div>
  </div>
);

// Define PropTypes for SkillBar
SkillBar.propTypes = {
  name: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

// Skills Component
const Skills = () => {
  return (
    <div className="skills-container">
      <h2 className="skills-title">Skills & Expertise</h2>
      <div className="skills-wrapper">
        {/* computer languages */}
        <div className="skills-card">
          <h3>Computer Language</h3>
          {skillsData.frontend.map((skill) => (
            <SkillBar key={skill.name} {...skill} />
          ))}
        </div>

        {/* Backend Skills */}
        <div className="skills-card">
          <h3>Backend Development</h3>
          {skillsData.backend.map((skill) => (
            <SkillBar key={skill.name} {...skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

// ✅ Correct Export (Export `Skills` instead of `main`)
export { Skills};