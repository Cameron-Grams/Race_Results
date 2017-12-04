// develop the Schema for a single race....
const mongoose = require( 'mongoose' );

// races in the db 
const raceSchema = mongoose.Schema( {
    "year": { 
        type: Number
    },
    "runners": [  
    {
    "Place" : { type: String },
    "Div/Tot" :  { type: String },
    "FName" :  { type: String },
    "LName" :  { type: String },
    "Num" :  { type: String },
    "S" :  { type: String },
    "Ag" :  { type: String },
    "City" :  { type: String },
    "St" :  { type: String },
    "Gun-Time" :  { type: String },
    "Net-Time" :  { type: String },
    "Pace" :  { type: String }
    }
    ]} );

const Race = mongoose.model( 'Race', raceSchema );
 
module.exports = { Race }; 


