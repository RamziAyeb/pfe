import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../styles/acceuil.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActions } from '@mui/material';
import forgeron from '../image/forgeron.png';
import { Select, FormControl, InputLabel, MenuItem } from '@mui/material';

function Acceuil() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5001/forgeron').then((res) => {
      setUsers(res.data);
    });
  }, []);

  const handleRegionChange = (event) => {
    setSelectedRegion(event.target.value);
  };

  const filteredUsers = users.filter((user) => user.place === selectedRegion || selectedRegion === '');

  return (
    <div className="acceuil">
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Region</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Place"
          value={selectedRegion}
          onChange={handleRegionChange}
          className="region-select"
        >
          <MenuItem value="" className="custom-menu-item">All</MenuItem>
          <MenuItem value="Tunis" className="custom-menu-item">Tunis</MenuItem>
          <MenuItem value="Ariana" className="custom-menu-item">Ariana</MenuItem>
          {/* Add custom styles to other menu items as needed */}
        </Select>
      </FormControl>
      {filteredUsers.map((user) => (
        <Card className="acccard" sx={{ maxWidth: 345 }} key={user.id}>
          <CardMedia component="img" alt="user image" height="142" src={forgeron} />
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
