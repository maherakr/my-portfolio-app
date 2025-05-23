'use client';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const currentTheme = localStorage.getItem('theme') || 'bumblebee';
    document.documentElement.setAttribute('data-theme', currentTheme);
    setIsDarkMode(currentTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? 'bumblebee' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    setIsDarkMode(!isDarkMode);
  };

  const scrollToTop = () => {
   document.body.scrollTop = 0; // For Safari
   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  return (
    <div className="navbar bg-base-100 shadow-sm fixed z-50">
      <div className="navbar-start">
      <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a href="#bio">Bio</a></li>
          <li><a href='#experience'>Experience</a></li>
          <li><a href='#projects'>Projects</a></li>
          <li><a href='#contactMe'>Contact Me</a></li>
          <li><a href='/files/resume.pdf'>Resume <FontAwesomeIcon icon={faFileArrowDown} className=" text-base-content" /></a></li>
        
      </ul>
    </div>
        <button onClick={scrollToTop} className="btn btn-ghost text-xl">Maher A.</button>
        <ul className="menu menu-horizontal px-1 hidden lg:flex">
          <li><a href="#bio">Bio</a></li>
          <li><a href='#experience'>Experience</a></li>
          <li><a href='#projects'>Projects</a></li>
          <li><a href='#contactMe'>Contact Me</a></li>
          <li><a href='/files/resume.pdf'>Resume <FontAwesomeIcon icon={faFileArrowDown} className=" text-base-content" /></a></li>
        </ul>
      </div>

      <div className="navbar-end">
        <label className="flex cursor-pointer gap-2">
        
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
            viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>

          <input
            type="checkbox"
            className="toggle"
            checked={isDarkMode}
            onChange={toggleTheme}
          />

          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
            viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label>
      </div>
    </div>
  );
}