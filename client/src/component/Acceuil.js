import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../styles/acceuil.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { useNavigate } from 'react-router-dom';

function Acceuil() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5001/getusers').then((res) => {
      setUsers(res.data);
    });
  }, []);
  

  return (
    <div className='acceuil'>
    
      {users.map((user) => (
       
      <Card className='acccard' >
        <Card.Img variant="top" src="azaz.png" />
        <Card.Body>
          <Card.Title>user</Card.Title>
          <Card.Text>
          
         <div>{user.name}</div>
         <div>{user.lastName}</div>
          
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <button onClick={()=>{navigate('/reservation')}}>Reserver</button>
        </Card.Footer>
      </Card>
      ))}
      
     
    </div>
  );
}

export default Acceuil;
