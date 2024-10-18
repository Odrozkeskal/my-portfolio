// src/App.js
import React from 'react';
import Header from './components/Header';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Home from './components/Home';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
function App() {
  return (
    <div>
      <Header />
      <Home />
      <Skills />
      <Experience />
      <Projects/>
      <Contacts/>
    </div>
  );
}

export default App;
