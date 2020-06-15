import React from 'react';
import NavBar from './components/navbar.js'
import Showcase from './components/showcase.js';
import AboutMe from './components/aboutme.js';
import Footer from './components/footer.js';

function App() {
  return(
    <React.Fragment>
      <NavBar/>
      <Showcase/>
      <AboutMe/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
