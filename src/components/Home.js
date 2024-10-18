import React from 'react';

const Home = () => {
  return (
    <section className="home">
      <div className="home-content">
        <h1>Hello, I'm Pavel Ring</h1>
        <p>I'm a newly minted Full Stack developer passionate about building engaging web applications. I'm particularly fascinated by backend development and eager to deepen my skills in this area. Let's create something amazing together!</p>
        <a
          href="https://docs.google.com/document/d/1QoT00C7daFq9lpn7pXBkSKDryh-2mn3_Ds4Y-ydq5vA/edit?tab=t.0"
          className="btn btn-primary home-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Discover My Skills
        </a>
      </div>
    </section>
  );
};

export default Home;
