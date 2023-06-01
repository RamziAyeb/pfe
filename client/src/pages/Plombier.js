import React from 'react'
import Acceuilplombier from '../component/Acceuilplombier'
import Navbar from '../component/Navbar'
import Sidebar from '../component/Sidebar'

function Plombier() {
  return (
    <div>
    <Navbar />
    <div className='home-wrapper'>
      <div className='sidebar'>
        <Sidebar />
      </div>
      <div className='content'>
        <Acceuilplombier />
      </div>
    </div>
  </div>
  )
}

export default Plombier