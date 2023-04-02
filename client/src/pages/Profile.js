import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../redux/userSlice/userSlice';

const Profile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
  return (
    <div>Profile


    <button onClick={()=>{
        dispatch(logout());
        navigate("/register");

    }}> 

        logout
    </button>
    </div>
  )
}


export default Profile