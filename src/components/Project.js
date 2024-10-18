import React from 'react';

const Project = ({ title, description, link, image }) => {
  return (
    <div className="project">
      <img src={image} alt={title} className="project-image" />
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">View Project</a>
    </div>
  );
};

export default Project;
