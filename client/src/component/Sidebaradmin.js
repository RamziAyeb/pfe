import React from 'react';
import '../styles/sidebaradmin.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/userSlice/userSlice';
import { FaSignOutAlt } from 'react-icons/fa';

function Sidebaradmin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/signIn');
  };

  return (
    <div className="sidebar">
      <header>
        <h1>ADMIN</h1>
      </header>
      <ul className="nav">
        <li>
          <NavLink to="/admin" activeClassName="active-link">
            <i className="zmdi zmdi-link" /> Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/adminuser" activeClassName="active-link">
            <i className="zmdi zmdi-link" />Utilisateur
          </NavLink>
        </li>
      </ul>
      <div className="logout-container">
        <button onClick={handleLogout}>
        Déconnexion <FaSignOutAlt />
        </button>
      </div>
    </div>
  );
}

export default Sidebaradmin;
