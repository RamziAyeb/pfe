import React, { useEffect, useState } from 'react';
import "../styles/profilepres.css"
import axios from 'axios';
import { useParams } from 'react-router-dom';
function ProfilePres() {
  const [pres, setPres] = useState([]);
  const {id} = useParams;
  // useEffect (()=>{
  //   axios.get(`http://localhost:5001/getpres/${id}`)
  //   .then((res)=>{
  //    setPres(res.data)
  //   })

  // })
  
  return (
    <div>
       
       <div className='contpres'>
        <div className='lefttpres'>
            <input type='file'/>
            <p className='name'>
              {pres.name}
            </p>
            <p className='lastname'>
              lastname
            </p>
            <p className='email'>
              email
            </p>
            
        </div>
        <div className='righttpres'>
             
        </div>


       </div>





    </div>
  );
}

export default ProfilePres;
