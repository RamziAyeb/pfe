import React from 'react';
import '../styles/admin.css';
import Circledash from '../component/Circledash';
import Sidebaradmin from '../component/Sidebaradmin';
import Reservationdash from '../component/Reservationdash';
import DashboardChart from '../component/HistoChart';

const Dashboard = () => {
  return (
    <div className="adm">
    <div className="sidebaradmin">
      <Sidebaradmin />
      <div className="adm-content">
      
        {/* <Circledash /> */}
        {/* <Reservationdash/> */}
       <DashboardChart/>
      </div>
    </div>
    </div>
  );
};
export default Dashboard;