import React, { useEffect, useState } from 'react';
import "../styles/profilepres.css";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../component/Navbar';
import { updateUser } from "../redux/userSlice/userSlice";
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useRef } from 'react';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { updatReservation } from '../redux/reservationSlice/reservationSlice';
function ProfilePres({ ping, setPing }) {
  const [reservation, setReservation] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();
  const user = useSelector((state) => state?.user?.user);
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState("");
  const dispatch = useDispatch();
  const [files, setFiles] = useState([]);
  const [urls, setUrls] = useState([]);
  
  



  const uploadImage = async () => {
    const form = new FormData();
    form.append("file", file);
    form.append("upload_preset", "ramziayeb");
    await axios
      .post("https://api.cloudinary.com/v1_1/dwacnuxac/upload", form)
      .then((result) => {
        setUrl(result.data.secure_url);
        dispatch(updateUser({ id: user?._id, user: { image: result.data.secure_url } }));
        setPing(!ping);
       
      });
  };
  const handleFilesChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    setFiles(selectedFiles);
  };
  const uploadGalerie = async () => {
    const uploadPromises = files.map(async (file) => {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "ramziayeb");

      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dwacnuxac/upload",
        formData
      );

      return response.data.secure_url;
    });

    try {
      const uploadedUrls = await Promise.all(uploadPromises);

      setUrls([...urls, ...uploadedUrls]);
      dispatch(
        updateUser({
          id: user?._id,
          user: { galerie: [...user?.galerie, ...uploadedUrls] }
        })
      );
    } catch (error) {
      console.error("Error uploading images:", error);
    }
  };
  
  


  const handleUpdate = () => {
    navigate('/UpdateUser');
  };
  const fileInputRef = useRef(null);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    // Handle the file as needed
    setFile(file);
  };
  useEffect(() => {
    axios.get('http://localhost:5001/getallreservation').then((res) => {
      const filteredReservations = res.data.filter((res) => res.idrequest === user?._id);
      setReservation(filteredReservations);
    });
  }, [user?._id,ping]);
  console.log(reservation,'rev');
  // const [itemData, setItemData] = useState([
  //   {
  //     img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
  //     title: 'Bed',
  //   },
  //   {
  //     img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
  //     title: 'Kitchen',
  //   },
    
  // ]);
  // const handleImageUpload = (event) => {
  //   const file = event.target.files[0];

  //   if (file) {
  //     const reader = new FileReader();
  //     reader.readAsDataURL(file);
  //     reader.onload = () => {
  //       const newItemData = {
  //         img: reader.result,
  //         title: file.name,
  //       };
  //       setItemData((prevItemData) => [...prevItemData, newItemData]);
  //     };
  //   }
  // };
  
  return (
    <div>
      <Navbar />
      <div className='contpres'>
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
            Enregistrer
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
              Modifier
            </button>
          </div>
        </div>
      </div>
    </div>
  

          </div>
        
        <div>
          {reservation.map((res) => (
            <Card 
            style={
              res.resultat === "" 
                ? { border: "1px solid black" }
                : res.resultat === "accepted" 
                  ? { border: "1px solid black", backgroundColor: 'green' }
                  : { border: "1px solid black", backgroundColor: 'red' }
            }            
            key={res.num} sx={{ minWidth: 275, marginBottom: 2 }}>
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
              {!res.isClicked && 
                  <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '10px' }}>
                  <Button variant="contained" sx={{ bgcolor: '#4caf50', mr: 1 }}  onClick={() => {
                  dispatch(updatReservation({ id: res?._id,
                     reservation:{resultat:"Accepter",isClicked:true} }));
                     setPing(!ping);
                }} >
                    Accepter
                  </Button>
                  <Button variant="outlined" sx={{ color: '#f44336' }} 
                  onClick={() => {
                    dispatch(updatReservation({ id: res?._id, reservation:{resultat:"Refuser",isClicked:true} }));
                
                    setPing(!ping);
                  }}
                  >
                    Supprimer
                  </Button>
                </div>
              }
          
            </Card>
          ))}
        
          
          </div>
          {/* <div className="galerie">
      <input type="file" multiple onChange={handleFileChange} />
      {user?.galerie[0] && (
        <img
          src={user.galerie[0]}
          alt="First Image"
          style={{ width: '10%', height: 'auto' }}
        />
      )}
      <ImageList sx={{ width: 500, height: 45}} cols={3} rowHeight={164}>
        {urls.map((url, index) => (
          <ImageListItem key={index}>
            <img
              src={url}
              alt={`Image ${index + 1}`}
              loading="lazy"
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            />
          </ImageListItem>
        ))}
      </ImageList>
      <button className="upload_button" onClick={uploadGalerie}>
        Enregistrer
      </button>
    </div> */}
        </div>
      </div>
    </div>
  );
}

export default ProfilePres;
