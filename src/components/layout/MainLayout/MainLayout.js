import React from 'react';
import PageNav from '../PageNav/PageNav';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Portfolio from '../Portfolio/Portfolio';
import Contact from '../Contact/Contact';

const MainLayout = () => {
  return (
    <div>
      <PageNav />
      <About />
      <Skills />
      <Portfolio/>
      <Contact />
    </div>
  );
};

export default MainLayout;