import React from 'react';
import '../styles/admin.css'
import Table from '../component/Table';
import Sidebaradmin from '../component/Sidebaradmin';
import '../styles/admin.css'
const Tableuse = () => {

  
  return (

    <div className="adm">
    <div className='sidebaradmin'>
              <Sidebaradmin/>
              
        <div className='adm-content'>
        <Table/>    
        </div>
    </div>
    </div>
  );
};

export default Tableuse;