import React from 'react';
import './index.scss';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => (
  <div className="nav-bar">
    <nav>
    <NavLink exact={true} activeClassName="active" to="/">
        <FontAwesomeIcon icon={faHome} color="4d4d4e" />
    </NavLink>
    <NavLink exact={true} activeClassName="active" className="about-link" to="/about">
        <FontAwesomeIcon icon={faUser} color="4d4d4e" />
    </NavLink>
    <NavLink exact={true} activeClassName="active" className="contact-link" to="/contact">
        <FontAwesomeIcon icon={faEnvelope} color="4d4d4e" />
    </NavLink>
    </nav>
  </div>
);

export default Sidebar;
