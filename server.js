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



// get prestataire
app.get('/getusers', async(req,res)=>{
    try{
        const utilisateur = await User.find({role:'prestataire'})
        res.send(utilisateur)

    }
    catch(err){
        res.send(err)
    }
}
)
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

  




app.listen(process.env.PORT,(err)=>err?console.log(err):console.log("server is running"));
