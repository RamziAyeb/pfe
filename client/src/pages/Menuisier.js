import React from 'react'
import Acceuilmenuisier from '../component/Acceuilmenuisier'
import Navbar from '../component/Navbar'
import Sidebar from '../component/Sidebar'


function Menuisier() {
  return (
    <div>
    <Navbar />
    <div className='home-wrapper'>
      <div className='sidebar'>
        <Sidebar />
      </div>
      <div className='content'>
        <Acceuilmenuisier />
      </div>
    </div>
  </div>
  )
}

export default Menuisier