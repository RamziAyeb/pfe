import React from 'react';
import { Form } from 'react-bootstrap';
import '../styles/reservation.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../component/Navbar'
function Reservation() {
  return (
    <div>
      <Navbar/>
    <div id="booking" className="section">
      <div className="section-center">
        <div className="container">
          <div className="row">
            <div className="booking-form">
              <div className="booking-bg" />
              <Form>
                <div className="form-header">
                  <h2>Make your reservation</h2>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <Form.Group className="form-group">
                      <Form.Label>Date</Form.Label>
                      <Form.Control className="form-control" type="date" required />
                    </Form.Group>
                  </div>
                </div>
                <Form.Group className="form-group">
                  <Form.Label>Email</Form.Label>
                  <Form.Control className="form-control" type="email" placeholder="Enter your email" />
                </Form.Group>
                <Form.Group className="form-group">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control className="form-control" type="tel" placeholder="Enter your phone number" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Description</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <div className="form-btn">
                  <button className="submit-btn">Reserve</button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Reservation;
