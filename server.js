const express= require("express");
const cors = require("cors");
const app =express() ;
const db_connect=require("./db_connect");
require("dotenv").config();
db_connect();
app.use(express.json());
app.use(cors());

const User= require('./models/user');
const userRoute = require('./routes/user')
app.use('/user',userRoute)

const Reservation = require('./models/reservation');
const reservationRoute = require('./routes/reservation');
app.use('/reservation', reservationRoute);


// get prestataire
app.get('/getusers', async (req, res) => {
    try {
      const utilisateurs = await User.find({ role: { $nin: ['', 'client'] } });
      res.send(utilisateurs);
    } catch (err) {
      res.status(500).send(err);
    }
  });
  
  // get plombier
  app.get('/plombier', async (req, res) => {
    try {
      const utilisateurs = await User.find({ role: 'plombier' });
      res.send(utilisateurs);
    } catch (err) {
      res.status(500).send(err);
    }
  });
  // get electrecien
  app.get('/electrecien', async (req, res) => {
    try {
      const utilisateurs = await User.find({ role: 'electrecien' });
      res.send(utilisateurs);
    } catch (err) {
      res.status(500).send(err);
    }
  });
   // get menuisier
   app.get('/menuisier', async (req, res) => {
    try {
      const utilisateurs = await User.find({ role: 'menuisier' });
      res.send(utilisateurs);
    } catch (err) {
      res.status(500).send(err);
    }
  });
  // get forgeron
  app.get('/forgeron', async (req, res) => {
    try {
      const utilisateurs = await User.find({ role: 'forgeron' });
      res.send(utilisateurs);
    } catch (err) {
      res.status(500).send(err);
    }
  });
    // get technicien
    app.get('/technicien', async (req, res) => {
      try {
        const utilisateurs = await User.find({ role: 'technicien de maintenance' });
        res.send(utilisateurs);
      } catch (err) {
        res.status(500).send(err);
      }
    });
  // get technicien
  app.get('/peinteur', async (req, res) => {
    try {
      const utilisateurs = await User.find({ role: 'peinteur' });
      res.send(utilisateurs);
    } catch (err) {
      res.status(500).send(err);
    }
  });
// prestataire by id
app.get('/getpres/:id' , async(req,res)=>{
    try {
        
        const pres = await User.findById(req.params.id,{  role:'prestataire'})
        res.send(pres)
    } catch (err) {
        res.send(err)
    }
})


//*********** */
app.get('/getbyid/:id' , async(req,res)=>{
    try {
        const pres = await User.findById(req.params.id)
        res.send(pres)
    } catch (err) {
        res.send(err)
    }
})


// all users
app.get('/getallusers', async(req,res)=>{
    try{
        const utilisateur = await User.find({})
        res.send(utilisateur)

    }
    catch(err){
        res.send(err)
    }
}
)
app.delete('/deleteuser/:id', async (req, res) => {
    try {
        id = req.params.id
        deleteduser = await User.findByIdAndDelete({ _id: id })
        res.send(deleteduser)

    } catch (error) {
        res.send(error)
    }
})
// Update user by ID
app.put('/updateuser/:id', async (req, res) => {
    try {
      const id = req.params.id;
      const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });
      res.send(updatedUser);
    } catch (error) {
      res.send(error);
    }
  });

  // all reservation 
  app.get('/getallreservation', async(req,res)=>{
    try{
        const reservation = await Reservation.find({})
        res.send(reservation)

    }
    catch(err){
        res.send(err)
    }
}
)
app.delete('/deletereservation/:id', async (req, res) => {
  try {
      id = req.params.id
      deletereservation= await Reservation.findByIdAndDelete({ _id: id })
      res.send(deletereservation)

  } catch (error) {
      res.send(error)
  }
})


  PORT=process.env.PORT

app.listen(process.env.PORT,(err)=>err?console.log(err):console.log("server is running"));
