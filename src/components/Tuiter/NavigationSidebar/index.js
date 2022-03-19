import React from 'react'
import { Link, useLocation } from "react-router-dom";

import pages from "./pages.json";

const NavItem = ({ page: { title, href, iconClasses } }) => {
  const location = useLocation()


  return (
    <Link to={href} className={`list-group-item list-group-item-action ${location.pathname === href ? 'active' : ''}`}>
      <i className={iconClasses}></i>
      <span className="d-none d-xl-inline-block">{title}</span>
    </Link>
  )
}

const NavigationSidebar = () => {
  return (
    <div>
      <div className="list-group">
        <Link to="/" className="list-group-item list-group-item-action">
          <i className="fab fa-twitter fa-lg"></i>
        </Link>
        {pages.map(page => {
          return <NavItem page={page} key={page.title} />
        })}
        <button type="button" className="btn btn-primary btn-block rounded-pill mt-2">Tuit</button>
      </div>
    </div>
  )
}

export default NavigationSidebar