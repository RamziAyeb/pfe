import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import Login from './Login'
import "../styles/registerlogin.css"
import { userRegister } from '../redux/userSlice/userSlice'
import { useNavigate } from 'react-router-dom'
const Register = () => {
const [hekki, setHekki] = useState(false);
const [register, setregister] = useState({
  name:"",
  lastName:"",
  email:"",
  password:"",
  age:"",

});
const dispatch = useDispatch();
const navigate = useNavigate();
  return (
    <div>
           <div className="main">
        <input type="checkbox" id="chk" aria-hidden="true" />
 {hekki? 
 <div className='signup_mokerza' >
  
 <form onSubmit={(e) => e.preventDefault()} >
   <label for="chk" aria-hidden="true">
     Sign up
   </label>
     <input 
   type="text"
   name="name"
  placeholder="name"
  required =""
  onChange={(e) =>setregister({...register, name:e.target.value})}
  />
   <input
     type="text"
     name="lastNname"
     placeholder="Last name"
     required=""
     onChange={(e) =>setregister({...register, lastName:e.target.value})}
   />
   <input
     type="text"
     name="age"
     placeholder="Age"
     required=""
     onChange={(e) =>setregister({...register, age:e.target.value})}
   />
   <input
     type="email"
     name="email"
     placeholder="Email"
     required=""
     onChange={(e) =>setregister({...register, email:e.target.value})}
   />
   <input
     type="password"
     name="password"
     placeholder="Password"
     required=""
     onChange={(e) =>setregister({...register, password:e.target.value})}
   />
   <button
   
     className="signup_button"
     onClick={()=>{dispatch (userRegister(register));}}
   >
     Sign up
   </button>
 </form>
 
</div> :
 <div className="signup">
         
 <form onSubmit={(e) => e.preventDefault()}>
   <label for="chk" aria-hidden="true">
     Sign up
   </label>
    
    <input
   type="text"
   name="name"
   placeholder="name"
   required=""
   onChange={(e) =>setregister({...register, name:e.target.value})}
   /> 
   
    
  
   <input
     type="text"
     name="lastNname"
     placeholder="Last name"
     required=""
     onChange={(e) =>setregister({...register, lastName:e.target.value})}
   />
   <input
     type="text"
     name="age"
     placeholder="Age"
     required=""
     onChange={(e) =>setregister({...register, age:e.target.value})}
   />
   <input
     type="email"
     name="email"
     placeholder="Email"
     required=""
     onChange={(e) =>setregister({...register, email:e.target.value})}
   />
   <input
     type="password"
     name="password"
     placeholder="Password"
     required=""
     onChange={(e) =>setregister({...register, password:e.target.value})}
   />
   <button
   
     className="signup_button"
     onClick={()=>{dispatch (userRegister(register));
      setTimeout(() => {
        navigate("/registerverif");
        }, 1500);  
    }}
   >
     Sign up
   </button>
 </form>
 
</div> 
}
     
        <Login hekki={hekki} setHekki={setHekki} />
        
      </div>
    </div>
  )
  
}

export default Register;