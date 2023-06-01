
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
//import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userRegister } from '../redux/userSlice/userSlice'
import { useNavigate } from 'react-router-dom'
// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const theme = createTheme();

export default function SignUp() {
    const [register, setregister] = useState({
        name:"",
        lastName:"",
        email:"",
        password:"",
        age:"",
        place:"",
        role:""
      
      });
      const dispatch = useDispatch();
      const navigate = useNavigate();
      console.log(register);
      
    
   const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
    
  };
  const handlePlaceChange = (event) => {
    setregister({ ...register, place: event.target.value });
  };
  const handleRoleChange = (event) => {
    setregister({ ...register, role: event.target.value });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            {/* <LockOutlinedIcon /> */}
          </Avatar>
          <Typography component="h1" variant="h5">
          S’inscrire 
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="Prénom"
                  autoFocus
                  onChange={(e) =>setregister({...register, name:e.target.value})}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Nom "
                  name="lastName"
                  autoComplete="family-name"
                  onChange={(e) =>setregister({...register, lastName:e.target.value})}

                />
              </Grid>
           
      <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="Age"
                  required
                  fullWidth
                  id="Age"
                  label="Age"
                  autoFocus
                  onChange={(e) =>setregister({...register, age:e.target.value})}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Region</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Place"
          value={register.place}
          onChange={handlePlaceChange}

          >  
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
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Adresse e-mail"
                  name="email"
                  autoComplete="email"
                  onChange={(e) =>setregister({...register, email:e.target.value})}

                />
                
              </Grid>
              <Grid item xs={12} sm={12}>
              <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Rôle</InputLabel>
              
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Role"
          value={register.role}
          onChange={handleRoleChange}

          >  
          <MenuItem value="client">client</MenuItem>
          <MenuItem value="prestataire">prestataire</MenuItem>
          
        </Select>
        </FormControl>
        </Grid>
              <Grid item xs={13}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Mot de passe"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={(e) =>setregister({...register, password:e.target.value})}

                />
              </Grid>
           
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={()=>{dispatch (userRegister(register));
                setTimeout(() => {
                  if (register.role=="client"){
                    navigate("/profile");
                  }
                  else if (register.role=="prestataire"){
                    navigate("/registerverif")
                  }
                  
                  }, 1500);  
              }}
            >
             S’inscrire
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/signIn" variant="body2">
                Si vous avez déjà un compte, connecter-vous ici
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 5 }} /> */}
      </Container>
    </ThemeProvider>
  );
}






















