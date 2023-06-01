import axios from 'axios';
import React, { useEffect, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/acceuil.css';





import { Link, useNavigate } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActions } from '@mui/material';
import plombier from '../image/plombier.png';
import electrecien from '../image/electrecien.png';
import menuisier from '../image/menuisier.png'
import forgeron from '../image/forgeron.png'
import peinteur from '../image/peinteur.png'
import technicien from '../image/technicien.png'
function Acceuil() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5001/getusers').then((res) => {
      setUsers(res.data);
    });
  }, []);


  // const getRoleImage = (role) => {
  //   switch (role) {
  //     case 'plombier':
  //       return plombier;
  //       case 'technicien de maintenance':
  //       return technicien;
  //       case 'peinteur':
  //       return peinteur;
  //       case 'menuisier':
  //       return menuisier;
  //     case 'electrecien':
  //       return electrecien;
  //       case 'forgeron':
  //       return forgeron;
  //     // Add other cases for each role and its corresponding image
  //     default:
  //       return '';
  //   }
  // };

  return (
    <div className='acceuil'>
      
      {users.map((user) => (
        <Card className='acccard' sx={{ maxWidth: 345 }} key={user.id}>
          <CardMedia
            component="img"
            alt="user image"
            height="142"
            src={user.image}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {user.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {user.lastName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {user.place}
              {console.log(typeof(user._id) )}

            </Typography>
          </CardContent>
          <CardActions>
          <Link to={`/reservation/${user._id}`}>
            <Button size="small" >
             Voir plus
            </Button>
            </Link>
           
          </CardActions>
        </Card>
      ))}
    </div>
  );
}

export default Acceuil;
