import React from 'react'; 
import Slider from 'react-slick';

const Projects = () => {
  const projects = [
    {
      title: 'Yoko Taro Page',
      description: 'A simple portfolio website dedicated to the person who inspired my journey into programming. Built using Materialize, JavaScript, and HTML/CSS, it reflects my growth as a developer.',
      link: 'https://codepen.io/Pavel-Polosin/full/abxYomv',
      image: 'https://sun6-23.userapi.com/impg/cvGleaAi8a7FrT_O3J13ZuCkkRJuZ5v44G8gkA/WX7CnYryZ9U.jpg?size=1905x902&quality=96&sign=a2c08698a8e2363c59249fc463e90491&type=album',
    },
    {
      title: 'Encyclopedia of Medicines',
      description: 'A web application developed using Node.js and Neon PostgreSQL. Users can easily search for medications tailored to specific symptoms and add new data, contributing to a better understanding and management of health conditions.',
      link: 'https://www.youtube.com/watch?v=Z1pj9nw82XA',
      image: 'https://sun9-37.userapi.com/impg/VX_XAHghXMucr3CQf177BYS-rn18lt7xuB0EJg/hNrY4thAJfI.jpg?size=1280x633&quality=96&sign=f9071c7cd8b5b91e7d3dc30ba2d39254&type=album',
    },
    {
      title: 'User Blog',
      description: 'A platform for users to create, edit, and delete posts with image uploads. Built using Node.js, PostgreSQL, and Knex for seamless functionality.',
      link: 'https://project-blog-dnvw.onrender.com/',
      image: 'https://sun9-30.userapi.com/impg/3ReJrN_x7qgTOJjItzHquIuNAqtZ5ScglXXf0w/IWaFJkU0-2g.jpg?size=1904x952&quality=96&sign=ad42a8f4411219fe5ebc87eeed7de088&type=album',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="projects" style={{ padding: '20px' }}>
      <h2><i className="fas fa-folder-open"></i> My Projects</h2>
      <div className="carousel-container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <Slider {...settings}>
          {projects.map((project, index) => (
            <div key={index} className="project-item" style={{ textAlign: 'center', padding: '20px' }}>
              <img src={project.image} alt={project.title} className="project-image" style={{ maxWidth: '100%', borderRadius: '5px' }} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ display: 'inline-block', marginTop: '10px' }}>View Project</a>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Projects;
