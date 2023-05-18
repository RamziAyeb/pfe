import Table from 'react-bootstrap/Table';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { BiTrash } from 'react-icons/bi';
function DarkExample() {
  const deleteUser = (userId) => {
    axios.delete(`http://localhost:5001/deleteuser/${userId}`)
      .then(() => {
        setUser((prevUsers) => prevUsers.filter((user) => user.id !== userId));
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const [user, setUser] = useState([]);
  console.log(user,"hh")
  useEffect(() => {
    axios.get('http://localhost:5001/getallusers').then((res) => {
      setUser(res.data);
    });
  }, []);
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>nbr</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Role</th>
          <th> </th>
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
            <Button variant="outline-danger" onClick={()=>deleteUser(user._id)
            }>
            <BiTrash /> 
            </Button>{' '}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
export default DarkExample;
