const mongoose = require("mongoose");
const schema  = mongoose.Schema;

const reservationSchema = new schema({
    name:String,
    lastname:String,
    date:Date,
    num: Number,
    description: String,
    idsend:String,
    idrequest:String,
    namesend:String,
    resultat:{type:String,default:''},
    isClicked :{type:Boolean,default:false}
});

const Reservation = mongoose.model('Reservation', reservationSchema);
module.exports = Reservation;
