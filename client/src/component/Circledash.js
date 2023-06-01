import React, { useEffect, useState } from 'react';
import '../styles/circledash.css';
import axios from 'axios';

function Circledash() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5001/getallusers')
      .then((res) => {
        setUsers(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  
  const groupUsersByRole = (users) => {
    const groupedUsers = {};
    if (Array.isArray(users)) {
      users.forEach((user) => {
        const { role } = user;
        if (!groupedUsers[role]) {
          groupedUsers[role] = [];
        }
        groupedUsers[role].push(user);
      });
    }
    return groupedUsers;
  };

  const groupedUsers = groupUsersByRole(users);

  return (
    <div className="circledash">
      <div className="role-card-grid">
        {Object.entries(groupedUsers).map(([role, roleUsers]) => {
          if (role === '') {
            return null; // Skip rendering the "admin" role card
          }
          return (
            <div key={role} className="role-card">
              <div className="circle-tile">
                <a href="#">
                  <div className="circle-tile-heading">
                    <i className="fa fa-users fa-fw fa-3x" />
                  </div>
                </a>
                <div className="circle-tile-content">
                  <div className="circle-tile-description">{role}</div>
                  <div className="circle-tile-number">{roleUsers.length}</div>
                
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Circledash;