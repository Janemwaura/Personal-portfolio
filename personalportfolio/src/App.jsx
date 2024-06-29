// App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './components/Nav';

const App = () => {
  return (
    <Router>
      <div className="bg-slate-900">
        <nav>
          <Nav />
        </nav>
        {/* Other content of your app */}
      </div>
    </Router>
  );
};

export default App;
