import React from 'react';
import "../styles/profile.css"
import {  useSelector } from 'react-redux';
import Navbar from '../component/Navbar';

function Profile() {
  const user=useSelector((state)=>state?.user?.user)
  return (
    <div>
      <Navbar />
      <div className='cont'>
        <div className='leftt'>
          <div className="container mb-4 p-3 justify-content-center">
            <div className="card p-4">
              <div className="image d-flex flex-column justify-content-center align-items-center">
                <button className="btn btn-secondary">
                  <img src="https://i.imgur.com/wvxPV9S.png" height={150} width={150} alt="Profile" />
                </button>
                <span className="name mt-3">
                  <p>{user?.name}</p>
                </span>
                <span className="idd">
                  <p> {user?.lastName}</p>
                </span>
                <span className="idd">
                  <p> {user?.age}</p>
                </span>
                <span className="idd">
                  <p> {user?.place}</p>
                </span>
                <div className="d-flex mt-2">
                  <button className="btn1 btn-dark">Edit Profile</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Profile;
