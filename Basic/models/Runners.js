// develop the Schema for a single runner
const mongoose = require( 'mongoose' );

// races in the db 
const runnerSchema = mongoose.Schema( {
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

} );

const Runner = mongoose.model( 'Runner', raceSchema );
 
module.exports = { Runner }; 
