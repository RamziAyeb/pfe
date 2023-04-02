import './App.css';
import Register from './component/Register';
import {Routes , Route } from 'react-router-dom';
import { useEffect } from 'react';
import { userCurrent } from './redux/userSlice/userSlice';
import { useDispatch } from 'react-redux';
import Profile from './pages/Profile';
import PrivateRoute from './PrivateRoutes/PrivateRoutes';
import RegisterVerif from './pages/RegisterVerif';
function App() {
  const dispatch = useDispatch();
  const isAuth = localStorage.getItem("token")
  useEffect(() => {

if(isAuth){
  dispatch (userCurrent())
}
  }, [dispatch])
  
  return (
    <>
   <Routes >
    <Route path="/register" element={<Register/>}/>
    <Route element={<PrivateRoute/>}>
    <Route path="/profile" element={<Profile/>}/>

    </Route>
    <Route path="/registerverif" element={<RegisterVerif/>}/>

   </Routes>
    </>
  );
}

export default App;
