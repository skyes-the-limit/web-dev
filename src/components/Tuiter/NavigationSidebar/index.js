import React from 'react'
import { Link } from 'react-router-dom';

import pages from "./pages.json";

const NavItem = ({ page: { title, href, iconClasses }, active: { active } }) => {
  return (
    <Link to={href} className={`list-group-item list-group-item-action ${active === title ? 'active' : ''}`}>
      <i className={iconClasses}></i>
      <span className="d-none d-xl-inline-block">{title}</span>
    </Link>
  )
}

const NavigationSidebar = (active = 'explore') => {
  return (
    <div>
      <div className="list-group">
        <Link to="/" className="list-group-item list-group-item-action">
          <i className="fab fa-twitter fa-lg"></i>
        </Link>
        {pages.map(page => {
          return <NavItem page={page} active={active} key={page.title} />
        })}
        <button type="button" className="btn btn-primary btn-block rounded-pill mt-2">Tuit</button>
      </div>
    </div>
  )
}

export default NavigationSidebar