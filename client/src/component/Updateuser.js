import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../redux/userSlice/userSlice';
import '../styles/update.css';
import Navbar from '../component/Navbar';

const Update = ({ping,setPing}) => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [texts, setTexts] = useState({
    name: '',
    lastName: '',
    age: '',
    email: '',
  });

  useEffect(() => {
    if (user) {
      setTexts({
        name: user.name,
        lastName: user.lastName,
        age: user.age,
        email: user.email,
      });
    }
  }, [user]);

  const handleChange = (e) => {
    setTexts((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleUpdate = async () => {
    await dispatch(updateUser({ id: user?._id, user: texts }));setPing(!ping); // Dispatch the updateUser action

    // Fetch the updated user data from the server
    const updatedUser = await fetchUpdatedUserData();

    // Dispatch an action to update the Redux store with the updated user data
    dispatch(updateUser({ id: updatedUser?._id, user: updatedUser }));
{user?.role =="client" ? navigate('/profile') : navigate('/profilepres');  }
    
  };

  const fetchUpdatedUserData = async () => {
    try {
      // Make an API call to fetch the updated user data from the server
      const response = await fetch(`API_ENDPOINT/${user?._id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // Add any necessary authorization headers
        },
      });

      if (response.ok) {
        // Parse the response data
        const userData = await response.json();
        return userData;
      } else {
        // Handle the error case
        throw new Error('Failed to fetch updated user data');
      }
    } catch (error) {
      console.log(error);
      // Handle any error that occurred during the fetch request
    }
  };

  return (
    <div>
      <Navbar />
      <div className='update'>
        <h2>Update User</h2>
        <form>
          <div className='form-group'>
            <label htmlFor='name'>Name:</label>
            <input
              type='text'
              id='name'
              name='name'
              onChange={handleChange}
              value={texts.name}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='lastName'>Last Name:</label>
            <input
              type='text'
              id='lastName'
              name='lastName'
              onChange={handleChange}
              value={texts.lastName}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='age'>Age:</label>
            <input
              type='text'
              id='age'
              name='age'
              onChange={handleChange}
              value={texts.age}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password:</label>
            <input
              type='text'
              id='password'
              name='password'
              onChange={handleChange}
              value={texts.password}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='email'>Email:</label>
            <input
              type='text'
              id='email'
              name='email'
              onChange={handleChange}
              value={texts.email}
            />
          </div>
          <button type='button' onClick={handleUpdate}>
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default Update;
