import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaSignOutAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/userSlice/userSlice';
import { useNavigate } from 'react-router-dom';
import '../styles/navbar.css';

function Mynav() {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loggingOut, setLoggingOut] = useState(false); // New loading state

  const handleLogout = () => {
    setLoggingOut(true); // Set loading state to true
    dispatch(logout());
    // You may simulate an asynchronous logout process with a setTimeout
    setTimeout(() => {
      navigate("/signIn");
    }, 2000);
  };

  return (
    <>
      <Navbar className='navbar'>
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Acceuil</Nav.Link>

            {user?.role === 'client' ? (
              <Nav.Link href="/profile">Profile</Nav.Link>
            ) : (
              <Nav.Link href="/profilepres">Profile</Nav.Link>
            )}

            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
        </Container>
        {loggingOut ? (
          <button className='logout-button' disabled>
            Logging out...
          </button>
        ) : (
          <button className='logout-button' onClick={handleLogout}>
            Déconnecter<FaSignOutAlt />
          </button>
        )}
      </Navbar>
    </>
  );
}

export default Mynav;
