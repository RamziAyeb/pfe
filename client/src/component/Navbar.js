import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaSignOutAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/userSlice/userSlice'; // Assuming the logout action is imported correctly
import { useNavigate } from 'react-router-dom';
function Mynav() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/signIn");
  };

  return (
    <>
      <Navbar bg="secondary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/profile">Profile</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            
            
            
          </Nav>
          
        </Container>
        <button onClick={handleLogout}>
                 logout
              <FaSignOutAlt />
               </button>
      </Navbar>
      
      
    </>
  );
}

export default Mynav;