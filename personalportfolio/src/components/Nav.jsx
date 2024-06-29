import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto">
        <ul className="flex justify-end space-x-4">
          <li>
            <Link to="/home" className="text-white hover:bg-purple-800 px-3 py-2 rounded-md">Home</Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:bg-purple-800 px-3 py-2 rounded-md">About</Link>
          </li>
          <li>
            <Link to="/services" className="text-white hover:bg-purple-800 px-3 py-2 rounded-md">Services</Link>
          </li>
          <li>
            <Link to="/projects" className="text-white hover:bg-purple-800 px-3 py-2 rounded-md">Projects</Link>
          </li>
          <li>
            <Link to="/contacts" className="text-white hover:bg-purple-800 px-3 py-2 rounded-md">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
