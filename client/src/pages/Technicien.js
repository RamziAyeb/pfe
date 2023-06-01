import React from 'react'
import Sidebar from '../component/Sidebar';
import Navbar from '../component/Navbar'
import Acceuiltechnicien from '../component/Acceuiltechnicien';

function Technicien() {
  return (
    <div>
    <Navbar />
    <div className='home-wrapper'>
      <div className='sidebar'>
        <Sidebar />
      </div>
      <div className='content'>
        <Acceuiltechnicien />
      </div>
    </div>
  </div>
  )
}

export default Technicien