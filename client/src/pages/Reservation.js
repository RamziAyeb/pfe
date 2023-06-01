import React, { useState } from 'react';
import { Form, Alert } from 'react-bootstrap';
import '../styles/reservation.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../component/Navbar';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { reservationAdd } from '../redux/reservationSlice/reservationSlice';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

function Reservation() {
  const user = useSelector((state) => state.user.user);
  
  console.log(user,'hhhhh');
  const { id } = useParams();
  const [reservation, setReservation] = useState({
    name:user?.name,
    lastname:user?.lastName,
    date: "",
    num: "",
    description: "",
    idsend: user?._id,
    idrequest:id,
    
  });
  const [showAlert, setShowAlert] = useState(false); // State to control alert visibility
  const dispatch = useDispatch();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(reservationAdd(reservation));
    setShowAlert(true); // Show the alert after form submission
    setReservation({
     
      date: "",
      num: "",
      description: "",
      idsend:user?._id,
      idrequest:id,
      namesend:id.name,
    });
  };

  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5001/getusers').then((res) => {
      setUsers(res.data);
    });
  }, []);

  

  return (
    <div className='rerer'>
      <Navbar />
       <div id="booking" className="section">
        <div className="section-center">
          <div className="container">
            <div className="row">
              <div className="booking-form">
                <div className="booking-bg" />
                <Form>
                
                  <div className="form-header">
                    <h2>Make your reservation</h2>
                    {user?.name}
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <Form.Group className="form-group">
                        <Form.Label>Date</Form.Label>
                        <Form.Control
                          className="form-control"
                          type="date"
                          name="date"
                          value={reservation.date}
                          onChange={(e) => setReservation({ ...reservation, date: e.target.value })}
                          required
                        />
                      </Form.Group>
                    </div>
                  </div>
              

                  
{/* <Form.Group className="mb-3">
  <div className="form-group-inline">
    <div className="form-group-inline__item">
      <Form.Label>Name</Form.Label>
      <Form.Control
        type="text"
        name="name"
        value={reservation.name}
        onChange={(e) => setReservation({ ...reservation, name: e.target.value })}
      />
    </div>
    <div className="form-group-inline__item">
      <Form.Label>Lastname</Form.Label>
      <Form.Control
        type="text"
        name="lastname"
        value={reservation.lastname}
        onChange={(e) => setReservation({ ...reservation, lastname: e.target.value })}
      />
    </div>
  </div>
</Form.Group> */}




   <Form.Group className="form-group">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                      className="form-control"
                      type="tel"
                      name="phone"
                      placeholder="Enter your phone number"
                      value={reservation.num}
                      onChange={(e) => setReservation({ ...reservation, num: e.target.value })}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      name="description"
                      value={reservation.description}
                      onChange={(e) => setReservation({ ...reservation, description: e.target.value })}
                    />
                  </Form.Group>
                  <div className="form-btn">
                  {users.filter((el) => el?._id == id).map((user, i) =>
                                 <>
                              
                          {user?.name}
                              </>
                                  )
                                  }
                    <button className="submit-btn" type="submit" onClick={handleFormSubmit}
                    
                    
                    >
                      Reserve
                    </button>
                  </div>
                </Form>
                
              </div>
              {showAlert && (
                  <Alert severity="success">
                    This is a success alert — check it out!
                  </Alert>
                )}
            </div>
          </div>
        </div>
      </div> 


    </div>
  );
}

export default Reservation;
