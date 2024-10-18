 import React, { useEffect, useState } from 'react';
 import '../styles/Experience.css';

const experience = [

  { year: '2024', description: 'Developers Institute. Specialization: Full-Stack Development', title: 'Certificate In Full-Stack Development' },
  { year: '2018', description: 'Diagnosed patients vision and prescribed them glasses or contact lenses', title: 'Optometrist at Detochki' },
  { year: '2016', description: 'Diagnosed patients vision and prescribed them glasses or contact lenses', title: 'Optometrist at Lensmaster' },
  { year: '2015', description: 'College of Entrepreneurship. Specialization: Optometry', title: 'Advanced Qualification Diploma' },
  { year: '2014', description: 'College of Entrepreneurship. Specialization: Medical Optics', title: 'Diploma Of Vocational Education ' },
];

const Experience = () => {
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const items = document.querySelectorAll('.timeline-item');
      items.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setVisibleItems((prev) => [...prev, index]);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="experience">
      <h2><i class="fas fa-briefcase"></i>Experience and education</h2>
      <div className="timeline">
        {[...experience, ].map((item, index) => (
          <div
            className={`timeline-item ${visibleItems.includes(index) ? 'fade-in' : ''}`}
            key={index}
          >
            <div className="timeline-year">{item.year}</div>
            <div className="timeline-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
            {index < experience.length +  - 1 && <div className="timeline-line"></div>}
          </div>
        ))}
      </div>
    </section>
  );
};



export default Experience;