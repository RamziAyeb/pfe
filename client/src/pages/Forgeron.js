import React from 'react'
import Sidebar from '../component/Sidebar';
import Navbar from '../component/Navbar'
import Acceuilforgeron from '../component/Acceuilforgeron';

function Forgeron() {
  return (
    <div>
    <Navbar />
    <div className='home-wrapper'>
      <div className='sidebar'>
        <Sidebar />
      </div>
      <div className='content'>
        <Acceuilforgeron />
      </div>
    </div>
  </div>
  )
}

export default Forgeron