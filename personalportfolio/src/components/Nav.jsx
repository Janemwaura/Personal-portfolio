import React from 'react';
import { Link } from 'react-scroll';

const Nav = () => {
  return (
    <nav className="bg-slate-900 p-4">
      <div className="container mx-auto">
        <ul className="flex justify-end space-x-4">
          <li>
            <Link to="Home"span={true} smooth={true} className="text-white hover:bg-purple-800 px-3 py-2 rounded-md">Home</Link>
          </li>
          <li>
            <Link to="About"span={true} smooth={true} className="text-white hover:bg-purple-800 px-3 py-2 rounded-md">About</Link>
          </li>
          <li>
            <Link to="Projects"span={true} smooth={true} className="text-white hover:bg-purple-800 px-3 py-2 rounded-md">Projects</Link>
          </li>
          <li>
            <Link to="Services"span={true} smooth={true} className="text-white hover:bg-purple-800 px-3 py-2 rounded-md">Services</Link>
          </li>
          <li>
            <Link to="Contact"span={true} smooth={true} className="text-white hover:bg-purple-800 px-3 py-2 rounded-md">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="border-b border-slate-500 pt-4 w-full"></div>
    </nav>
  );
};

export default Nav;
