import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './components/Nav';
import Banner from './components/Banner';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div className="bg-slate-900">
        <nav>
          <Nav />
          <Banner />
          <About />
          <Projects />
          <Services />
          <Contact />
          <Footer />
        </nav>
      </div>
    </Router>
  );
};

export default App;
