import React from 'react'
import Sidebar from '../component/Sidebar';
import Navbar from '../component/Navbar'
import Acceuilpeinteur from '../component/Acceuilpeinteur';

function Peinteur() {
  return (
    <div>
    <Navbar />
    <div className='home-wrapper'>
      <div className='sidebar'>
        <Sidebar />
      </div>
      <div className='content'>
        <Acceuilpeinteur />
      </div>
    </div>
  </div>
  )
}

export default Peinteur