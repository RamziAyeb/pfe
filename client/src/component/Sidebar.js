import React from 'react';
import '../styles/sidebar.css';

function Sidebar() {
  return (
    <div id='sidebar' className='fixed-sidebar'>
      <header>
        <a>Categorie </a>
      </header>
      <ul className='nav'>
        <li>
          <a href='/plombier'>
            <i className='zmdi zmdi-link' /> Plombier
          </a>
        </li>
        <hr></hr>
        <li>
          <a href='/electrecien'>
            <i className='zmdi zmdi-link' />Électricien
          </a>
        </li>
        <hr></hr>
        <li>
          <a href='/menuisier'>
            <i className='zmdi zmdi-widgets' /> Menuisier
          </a>
        </li>
        <hr></hr>
        <li>
          <a href='/forgeron'>
            <i className='zmdi zmdi-calendar' /> forgeron
          </a>
        </li>
        <hr></hr>
        <li>
          <a href='/technicien'>
            <i className='zmdi zmdi-info-outline' /> Technicien de maintenance
          </a>
        </li>
        <hr></hr>
        <li>
          <a href='/peinteur'>
            <i className='zmdi zmdi-settings' /> Peinteur
          </a>
        </li>
        <hr></hr>
      </ul>
    </div>
  );
}

export default Sidebar;
