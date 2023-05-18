import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { userCurrent } from './redux/userSlice/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import Profile from './pages/Profile';
import Protected from './PrivateRoutes/PrivateRoutes';
import RegisterVerif from './pages/RegisterVerif';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Mynav from './component/Navbar';
import Admin from './pages/Admin';
import Reservation from './pages/Reservation';
import ProfilePres from './pages/Profilepres';
import SignInSide from './component/sign';
import SignUp from './component/singUp';


import PrivateRoute from "./PrivateRoutes/PrivateRoutes";
import Dashboard from './pages/Admin';

function App() {
  const result = useSelector((state) => state.user);
  console.log(result);
  const [isSignedIn, setIsSignedIn] = useState(null);

  useEffect(() => {
    if (result.status) {
      setIsSignedIn(true);
    } else {
      setIsSignedIn(false);
    }
  }, [result.status]);

  const dispatch = useDispatch();
  const [ping, setPing] = useState(false);
  const isAuth = localStorage.getItem('token');

  useEffect(() => {
    if (isAuth) {
      dispatch(userCurrent());
    }
  }, [dispatch, ping]);

  return (
    <div>
      <div>
        <Routes>
        <Route path="/" element={<SignInSide />} />
          <Route path="/signIn" element={<SignInSide />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/contact" element={<Contact />} />
        <Route element={<PrivateRoute />}>
            <Route
              path="/profile"
              element={<Profile ping={ping} setPing={setPing} />}
            />
             <Route
              path="/profilepres"
              element={<ProfilePres ping={ping} setPing={setPing} />}
            />
             <Route
              path="/admin"
              element={<Dashboard ping={ping} setPing={setPing} />}
            />
            <Route
              path="/home"
              element={<Home ping={ping} setPing={setPing} />}
            />
            <Route
            
              path="/registerVerif"
              element={<RegisterVerif ping={ping} setPing={setPing}   />}
            />
            <Route
              path="/reservation"
              element={<Reservation ping={ping} setPing={setPing} />}
            />
            
          </Route>
          
     
          
          
          
        </Routes>
      </div>
    </div>
  );
}

export default App;
