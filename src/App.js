import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/navbar.js';
import Home from './pages/home';
import About from './pages/about.js';
import Footer from './components/footer.js';
import Contact from './pages/contact.js';
import Projects from './pages/projects';

export default function App() {
  return(
    <Router>
      <React.Fragment>
        <NavBar/>
        <Switch>
          <Route path="/projects" component={Projects}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
          <Route exact path="/" component={Home} />
        </Switch>
        <Footer/>
      </React.Fragment>
    </Router>
  );
}
