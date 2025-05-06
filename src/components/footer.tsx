import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {

  return (
    <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
      <nav className="grid grid-flow-col gap-4">
        <a href="#bio">Bio</a>
        <a href='#experience'>Experience</a>
        <a href='#projects'>Projects</a>
        <a href='#contactMe'>Contact Me</a>

      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a href="https://github.com/maherakr" >
            <FontAwesomeIcon icon={faGithub} className="w-8 !h-8 text-base-content " />

          </a>
          <a href="https://www.linkedin.com" >
            <FontAwesomeIcon icon={faLinkedinIn} className="w-8 !h-8 text-base-content " />

          </a>
          <a href="mailto:akremimaher29@gmail.com" >
            <FontAwesomeIcon icon={faEnvelope} className="w-8 !h-8 text-base-content " />

          </a>
        </div>
      </nav>
    </footer>

  );
}