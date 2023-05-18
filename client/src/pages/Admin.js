import React from 'react';
import '../styles/admin.css'
import Table from '../component/Table';


const Dashboard = () => {

  
  return (

    <div className='adm'>
      <div className='adm-a'>
        <div>
        <p>ADMIN</p>
        </div>
        <div>
            <p>A</p>
        </div>
      </div>
      <div className='adm-b'>
        <Table/>
      </div>
    </div>
  );
};

export default Dashboard;