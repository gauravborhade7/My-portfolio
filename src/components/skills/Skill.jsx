// import React from "react";
import PropTypes from "prop-types"; // Import PropTypes
import "./Skills.css"; // Import the CSS file

// Skill Data
const skillsData = {
  frontend: [
    { name: "HTML", percentage: 95 },
    { name: "CSS", percentage: 50 },
    { name: "JavaScript", percentage: 70 },
    {name: "Java",percentage:60},
  ],

  Framework: [
    { name: "Reactjs", percentage: 75 },
    { name: "Nodejs", percentage: 65 },
    { name: "Bootstrap", percentage: 70 },

  ],

  backend: [
    { name: "Firebase", percentage: 82 },
    { name: "Express.js", percentage: 80 },
    { name: "MongoDB", percentage: 75 },
    { name: "SQL", percentage: 45 },
  ]
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

        <div className="skills-card">
          <h3>
            Framework/Library
          </h3>
          {skillsData.Framework.map((skill) => (
            <SkillBar key={skill.name} {...skill} />
          ))}
          </div>
        {/* Backend Skills */}
        <div className="skills-card">
          <h3>Database</h3>
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