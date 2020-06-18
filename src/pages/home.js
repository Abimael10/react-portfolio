import React from 'react';
import Showcase from '../components/showcase.js';
import AboutMe from '../components/aboutme.js';

export default function Home() {
  return(
    <React.Fragment>
      <Showcase/>
      <AboutMe/>
    </React.Fragment>
  );
}