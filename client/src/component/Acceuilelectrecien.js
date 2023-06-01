import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../styles/acceuil.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link, useNavigate } from 'react-router-dom';
import { Select, FormControl, InputLabel, MenuItem } from '@mui/material';
import electrecien from '../image/electrecien.png';

function Acceuil() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5001/electrecien').then((res) => {
      setUsers(res.data);
    });
  }, []);

  const handleRegionChange = (event) => {
    setSelectedRegion(event.target.value);
  };

  const filteredUsers = users.filter((user) => user.place === selectedRegion || selectedRegion === '');

  return (
    <div className='acceuil'>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Region</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Place"
          value={selectedRegion}
          onChange={handleRegionChange}
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="Tunis">Tunis</MenuItem>
          <MenuItem value="Ariana">Ariana</MenuItem>
          <MenuItem value="Ben Arous">Ben Arous</MenuItem>
          <MenuItem value="Manouba">Manouba</MenuItem>
          <MenuItem value="Nabeul">Nabeul</MenuItem>
          <MenuItem value="Zaghouan">Zaghouan</MenuItem>
          <MenuItem value="Bizerte">Bizerte</MenuItem>
          <MenuItem value="Béja">Béja</MenuItem>
          <MenuItem value="Jendouba">Jendouba</MenuItem>
          <MenuItem value="Kef">Kef</MenuItem>
          <MenuItem value="Siliana">Siliana</MenuItem>
          <MenuItem value="Kairouan">Kairouan</MenuItem>
          <MenuItem value="Kasserine">Kasserine</MenuItem>
          <MenuItem value="Sidi Bouzid">Sidi Bouzid</MenuItem>
          <MenuItem value="Sousse">Sousse</MenuItem>
          <MenuItem value="Monastir">Monastir</MenuItem>
          <MenuItem value="Mahdia">Mahdia</MenuItem>
          <MenuItem value="Sfax">Sfax</MenuItem>
          <MenuItem value="Gafsa">Gafsa</MenuItem>
          <MenuItem value="Tozeur">Tozeur</MenuItem>
          <MenuItem value="Kebili">Kebili</MenuItem>
          <MenuItem value="Gabes">Gabes</MenuItem>
          <MenuItem value="Medenine">Medenine</MenuItem>
          <MenuItem value="Tataouine">Tataouine</MenuItem>
        </Select>
      </FormControl>
      {filteredUsers.map((user) => (
        <Card className='acccard' sx={{ maxWidth: 345 }} key={user.id}>
          <CardMedia
            component="img"
            alt="user image"
            height="142"
            src={electrecien}
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
            </Typography>
          </CardContent>
          <Link to={`/reservation/${user._id}`}>
            <Button size="small" >
            Voir plus
            </Button>
            </Link>
        </Card>
      ))}
    </div>
  );
}

export default Acceuil;
