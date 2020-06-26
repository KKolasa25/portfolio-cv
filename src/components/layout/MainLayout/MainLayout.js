import React from 'react';
import PageNav from '../PageNav/PageNav';
import About from '../About/About';
import Skills from '../Skills/Skills';

const MainLayout = () => {
  return (
    <div>
      <PageNav />
      <About />
      <Skills />
    </div>
  );
};

export default MainLayout;