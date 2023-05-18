import React from 'react';
import   {useState}  from 'react'
import '../styles/updateuser.css'


const UpdateUser = ({SetOppenUpdateuser}) => {
    const [texts , setTexts] = useState({
        name : '',
        lastName : '',
        password : '',
        age :'',
    });
    const handLeChange =(e)=> {
        setTexts((prev)=>({...prev, [e.target.name] : [e.target.value]}));
    };

  return (
    <div className='update'>updateuser
    <form >
        <input type='file'/>
        <input type='text' name='name' onChange={handLeChange}/>
        <input type='text' name='lastName' onChange={handLeChange}/>
        <input type='text' name='password' onChange={handLeChange}/>
        <input type='text' name='age' onChange={handLeChange}/>
        <button >update</button>
    </form>
    <button onClick={()=> SetOppenUpdateuser(false) }>
        x
    </button>
    </div>
  )
}

export default UpdateUser;