import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { BiTrash } from 'react-icons/bi';
import '../styles/table.css'
function DarkExample() {
  const deleteUser = (userId) => {
    axios
      .delete(`http://localhost:5001/deleteuser/${userId}`)
      .then(() => {
        setUser((prevUsers) => prevUsers.filter((user) => user._id !== userId));
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5001/getallusers')
      .then((res) => {
        const filteredUsers = res.data.filter((use) => use.role !== '');
        setUser(filteredUsers);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <table striped bordered hover variant="dark" className="user-table">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Role</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {user.map((use, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{use.name}</td>
            <td>{use.lastName}</td>
            <td>{use.role}</td>
            <td>
              <Button variant="outline-danger" onClick={() => deleteUser(use._id)}>
                <BiTrash />
              </Button>{' '}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DarkExample;
