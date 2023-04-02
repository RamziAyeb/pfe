import React, { useState } from 'react'
import { userLogin } from '../redux/userSlice/userSlice';
import {useDispatch} from 'react-redux'
import {useNavigate } from 'react-router-dom';
const Login = ({hekki,setHekki}) => {
  const [login, setlogin] = useState({
  
    email:"",
    password:"",
  
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
console.log(hekki,"heeeeki")
  return (
    <div className="login" onSubmit={(e) => e.preventDefault()}>
      <form >
        <label for="chk" aria-hidden="true"  onClick={()=>setHekki(!hekki)}>
          Login
        </label>
        <input
     type="email"
     name="email"
     placeholder="Email"
     required=""
     onChange={(e) =>setlogin({...login, email:e.target.value})}
   />
   <input
     type="password"
     name="password"
     placeholder="Password"
     required=""
     onChange={(e) =>setlogin({...login, password:e.target.value})}
   />
        <button
       
          className="signup_button"
          onClick={()=>{dispatch (userLogin(login));
          setTimeout(() => {
          navigate("/profile");
          }, 1500);  
            }}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login
