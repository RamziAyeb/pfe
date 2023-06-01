import React from 'react'
import Acceuilelectrecien from '../component/Acceuilelectrecien'
import Sidebar from '../component/Sidebar';
import Navbar from '../component/Navbar'
import '../styles/home.css';

function Electrecien() {
  return (
    <div>
    <Navbar />
    <div className='home-wrapper'>
      <div className='sidebar'>
        <Sidebar />
      </div>
      <div className='content'>
        <Acceuilelectrecien />
      </div>
    </div>
  </div>
  )
}

export default Electrecien