// App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './components/Nav';
import Banner from './components/Banner';
import About from './components/About';
import Services from './components/Services';


const App = () => {
  return (
    <Router>
      <div className="bg-slate-900">
        <nav>
          <Nav />
          <Banner />
          <About />
          <Services />
          
        </nav>
        {/* Other content of your app */}
      </div>
    </Router>
  );
};

export default App;
