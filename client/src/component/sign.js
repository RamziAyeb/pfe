import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { userLogin } from "../redux/userSlice/userSlice";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";
import bbbb from '../image/bbbb.png'
function SignInSide() {
  const result = useSelector((state) => state.user);
  const [isSignedIn, setIsSignedIn] = useState(null);
  const [error, setError] = useState(null); // Error state
  const [loading, setLoading] = useState(false); // Loading state

  const signin = () => {
    if (result.status) {
      setIsSignedIn(true);
    }
  };

  const { id } = useParams;
  const [user, setUser] = useState();

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5001/getallusers").then((res) => {
      setUsers(res.data);
    });
  }, []);
  console.log(users, "users");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
  };

  return (
    <ThemeProvider theme={createTheme()}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${bbbb})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              {/* <LockOutlinedIcon /> */}
            </Avatar>
            <Typography component="h1" variant="h5">
            Se connecter
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Adresse e-mail"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={(e) =>
                  setLogin({ ...login, email: e.target.value })
                }
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Mot de passe"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) =>
                  setLogin({ ...login, password: e.target.value })
                }
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={() => {
                  setLoading(true); // Show loading indicator
                  dispatch(userLogin(login), signin());
                  setTimeout(() => {
                    const user = users?.find((el) => el.email === login.email );
                    if (user) {
                      if (user.role === "client") {
                        navigate("/profile");
                      } else if (user.isAdmin === true) {
                        navigate("/admin");
                      } else {
                        navigate("/profilepres");
                      }
                    } else {
                      setOpen(true); // Open the Snackbar
                    }
                    setLoading(false); // Hide loading indicator
                  }, 2500);
                }}
                    >
                {loading ? <CircularProgress 
                color="inherit"
                size={24} /> : "Se connecter"}
              </Button>

              <Snackbar
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                open={open}
                autoHideDuration={6000}
                onClose={() => setOpen(false)}
              >
                <MuiAlert
                  onClose={() => setOpen(false)}
                  severity="error"
                  sx={{ width: "100%" }}
                >
                  email ou mot de passe incorrect
                </MuiAlert>
              </Snackbar>

              <Grid container>
                <Grid item>
                  <Link href="/signUp" variant="body2">
                    {"Si vous n'avez pas encore de compte, créez-en un."}
                  </Link>
                </Grid>
              </Grid>
              
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default SignInSide;
