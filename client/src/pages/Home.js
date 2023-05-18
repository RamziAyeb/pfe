import React from 'react';
import Acceuil from '../component/Acceuil'
import '../styles/home.css'
import { useNavigate } from 'react-router-dom';
import Navbar from '../component/Navbar'
import SearchBar from '../component/Search';
import Sidebar from '../component/Sidebar';
function Home() {
  const navigate = useNavigate();
  return (
  <div>
    <Navbar/>
    
    <div className='hom'>
      
      <div className='hom-a'>
      
      <Sidebar/>
       
        
      </div>
      <div className='hom-b'>
       <Acceuil/>
      </div>
    </div>
    </div>
  );
}

export default Home;




{/* <div className='hom' >
     
     //   <div className='asear'>
     //   <Button  variant="outline-secondary">
     //       Secondary
     //     </Button>
         
         
     //   <div className='homsear'>
         
     //     <Search/>
     //   </div>
     //   </div>
     //   <div className='hoacc'>
     //     aa
     //   </div>
     // </div> */}