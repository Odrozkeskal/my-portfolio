import React, { useEffect, useState } from 'react';

const skills = [
  { name: 'HTML', icon: 'fab fa-html5' },
  { name: 'CSS', icon: 'fab fa-css3-alt' },
  { name: 'JavaScript', icon: 'fab fa-js' },
  { name: 'Bootstrap', icon: 'fab fa-bootstrap' },
  { name: 'Git | GitHub', icon: 'fab fa-github' },
  { name: 'Node.js', icon: 'fab fa-node-js' },
  { name: 'React', icon: 'fab fa-react' },
  { name: 'Redux', icon: 'fab fa-reddit-alien' },
  { name: 'TypeScript', icon: 'fab fa-js-square' },
  { name: 'PostgreSQL', icon: 'fas fa-database' },
  { name: 'Python', icon: 'fab fa-python' },
  { name: 'C# | Unity', icon: 'fab fa-unity' },
  { name: 'OOP', icon: 'fas fa-cogs' },
  { name: 'SCS', icon: 'fas fa-layer-group' },
];

const Skills = () => {
  const [visibleSkills, setVisibleSkills] = useState([]);

  useEffect(() => {
    const timeoutIds = skills.map((_, index) =>
      setTimeout(() => {
        setVisibleSkills((prev) => [...prev, index]);
      }, index * 200) // Delay for animation
    );

    return () => {
      timeoutIds.forEach((id) => clearTimeout(id)); // Clear timers
    };
  }, []);

  return (
    <section className="skills">
      <h2 className="text-center">
        <i className="fas fa-cogs"></i> My Skills
      </h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div
            className={`skill-box ${visibleSkills.includes(index) ? 'fade-in' : ''}`} // Animation class
            key={index}
          >
            <i className={skill.icon} style={{ marginBottom: '10px', fontSize: '24px', color: '#007BFF' }}></i>
            <h5>{skill.name}</h5>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
