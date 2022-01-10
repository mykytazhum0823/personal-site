import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Mykyta Zhum</h2>
        <p><a href="mailto:mykytazhum@gmail.com">mykytazhum@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Mykyta.
      </p>
      <p>
        I&apos;m an experienced, professional lead full stack developer.
        Providing high-end web and app development services.
        I build top quality, user-friendly and responsive custom websites.
      </p>
      <p>
        Wordpress Website Design: Wordpress Development - Wordpress Plugin
        & Theme Customization
      </p>
      <p>
        Back-end Development: Nodejs - Javascript - Express - Nestjs
        - REST API - Graphql
      </p>
      <p>
        Front-end Development: Reactjs - Gatsby - Nextjs - Apollo Graphql
      </p>
      <p>
        Mobile App Development React Native - Android App Development - iOS App Development
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Mykyta Zhum</p>
    </section>
  </section>
);

export default SideBar;
