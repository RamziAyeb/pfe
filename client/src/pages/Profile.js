import React, { useState, useEffect, useRef } from 'react';
import "../styles/profile.css"
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from "../redux/userSlice/userSlice";
import Navbar from '../component/Navbar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { updatReservation } from '../redux/reservationSlice/reservationSlice';

function Profile({ping , setPing}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [file, setFile] = useState(null)
  const [url, setUrl] = useState("")
  const user = useSelector((state) => state.user.user);
  const [isUpdated, setIsUpdated] = useState(false);
  const [reservation, setReservation] = useState([]);
  const uploadImage = async () => {
    const form = new FormData()
    form.append("file", file)
    form.append("upload_preset", "ramziayeb");
    await axios
      .post("https://api.cloudinary.com/v1_1/dwacnuxac/upload", form)
      .then((result) => {
        setUrl(result.data.secure_url)
        dispatch(updateUser({ id: user?._id, user: { image: result.data.secure_url } }));
                          setPing(!ping);

      });

  };
  const handleImageClick = () => {
    fileInputRef.current.click();
  };
  const fileInputRef = useRef(null);
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    // Handle the file as needed
    setFile(file);
  };
  useEffect(() => {
    if (isUpdated) {
      dispatch(updateUser()).then(() => {
        setIsUpdated(false);
      });
    }
  }, [isUpdated, dispatch]);

  const handleUpdate = () => {
    navigate('/UpdateUser');
  };

  const handleUserUpdate = () => {
    setIsUpdated(true);
  };
  useEffect(() => {
    axios.get('http://localhost:5001/getallreservation').then((res) => {
      const filteredReservations = res.data.filter((res) => res.idsend === user?._id);
      setReservation(filteredReservations);
    });
  }, [user?._id,ping]);
  console.log(reservation,'rev');

  return (
    <div>
      <Navbar />
      <div className='cont'>
      <div className='leftt'>
            

            <br />
            
            <div className="container mb-4 p-3 justify-content-center">
      <div className="card p-4">
        <div className="image d-flex flex-column justify-content-center align-items-center">
          <img
            className="profile_image"
            src={user?.image}
            height={150}
            width={150}
            alt="Profile"
            onClick={handleImageClick}
          />
          <input
            ref={fileInputRef}
            className="choose_file visually-hidden"
            type="file"
            onChange={handleFileChange}
          />
          <button className="upload_button" onClick={uploadImage}>
            Save
          </button>
          <span className="name mt-3">
            <p>{user?.name}</p>
          </span>
          <span className="idd">
            <p>{user?.lastName}</p>
          </span>
          <span className="idd">
            <p>{user?.age}</p>
          </span>
          <span className="idd">
            <p>{user?.place}</p>
          </span>
          <div className="d-flex mt-2">
            <button onClick={handleUpdate} className="update-profile">
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  

          </div>
         <div>
         {reservation.map((res) => (
            <Card   style={
              res.resultat == "accepted"
                ? { border: "1px solid black",backgroundColor:'green'}
                : { border: "1px solid black",backgroundColor:'red' }
            } key={res.num} sx={{ minWidth: 275, marginBottom: 2 }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  Name: {res.name} {res.lastname}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Date: {res.date}
                </Typography>
                <Typography variant="body2">
                  Num tel: {res.num}
                  {res.resultat}
                  {res.isClicked}
                </Typography>
              </CardContent>
              
          
            </Card>
          ))}
         </div>
      </div>
    </div>
  );
}

export default Profile;
