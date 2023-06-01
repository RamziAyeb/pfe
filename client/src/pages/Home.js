import React from 'react';
import Acceuil from '../component/Acceuil';

import { useNavigate } from 'react-router-dom';
import Navbar from '../component/Navbar';

import Sidebar from '../component/Sidebar';

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <div className='home-wrapper'>
        <div className='sidebar'>
          <Sidebar />
        </div>
        <div className='content'>
          <Acceuil />
        </div>
      </div>
    </div>
  );
}

export default Home;


