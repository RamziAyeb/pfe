const express = require("express");
const Reservation = require("../models/reservation");
const reservationRouter = express.Router();

//add reservation
reservationRouter.post("/add", async (req, res) => {
    try {
      let newReservation = new Reservation(req.body);
      const result = await newReservation.save();
      res.send({ reservation: result, msg: "reservation added" });
    } catch (error) {
      console.log(error);
    }
  });
  //get all reservation
  reservationRouter.get("/all", async (req, res) => {
    try {
      let result = await Reservation.find();
      res.send({
        reservations: result,
        msg: "all resevations",
      });
    } catch (error) {
      console.log(error);
    }
  });
  
  ///get  reservation by id
  reservationRouter.get("/:id", async (req, res) => {
    try {
      let result = await Reservation.findById(req.params.id);
      res.send({
        reservations: result,
        msg: "this is the reservation by id",
      });
    } catch (error) {
      console.log(error);
    }
  });
  
  //update reservationby id
  
  reservationRouter.put("/update/:id", async (req, res) => {
    try {
      let result = await Reservation.findByIdAndUpdate(
        { _id: req.params.id },
        { $set: { ...req.body } },
        { new: true }
      );
      res.send({ newReservation: result, msg: "Reservation updated" });
    } catch (error) {
      console.log(error);
    }
  });
  
  //delete reservation
  
  reservationRouter.delete("/delete/:id", async (req, res) => {
    try {
      let result = await Reservation.findByIdAndDelete(req.params.id);
      res.send({ msg: "Reservation is delete" });
    } catch (error) {
      console.log(error);
    }
  });








module.exports = reservationRouter;