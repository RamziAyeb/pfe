import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../redux/userSlice/userSlice';

const Profile = () => {
  const user = useSelector((state) => state?.user?.user);

    const dispatch = useDispatch();
    const navigate = useNavigate();
  return (
    <div>
      Profile
      <h1>name : {user?.name}</h1>
      <h1>role : {user?.role}</h1>
      <button
        onClick={() => {
          dispatch(logout());
          navigate("/register");
        }}
      >
        logout
      </button>
    </div>
  );
}


export default Profile