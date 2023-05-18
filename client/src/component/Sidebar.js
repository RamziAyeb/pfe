import React from 'react'
import '../styles/sidebar.css'
function Sidebar() {
  return (
    <div id="sidebar">
    <header>
      <a >Categorie </a>
    </header>
    <ul className="nav">
      <li>
        <a href="#">
          <i className="zmdi zmdi-link" /> Plombier
        </a>
      </li>
      <li>
        <a href="#">
          <i className="zmdi zmdi-link" /> Saaaa
        </a>
      </li>
      <li>
        <a href="#">
          <i className="zmdi zmdi-widgets" /> Overview
        </a>
      </li>
      <li>
        <a href="#">
          <i className="zmdi zmdi-calendar" /> Events
        </a>
      </li>
      <li>
        <a href="#">
          <i className="zmdi zmdi-info-outline" /> About
        </a>
      </li>
      <li>
        <a href="#">
          <i className="zmdi zmdi-settings" /> Services
        </a>
      </li>
      <li>
        <a href="#">
          <i className="zmdi zmdi-comment-more" /> Contact
        </a>
      </li>
    </ul>
  </div>
  )
}

export default Sidebar