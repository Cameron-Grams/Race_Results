// develop the Schema for a single race....
const mongoose = require( 'mongoose' );

// races in the db 
const raceSchema = mongoose.Schema( {
    "year": { 
        type: Number
    },
    "runners": { 
        type: Array 
    }
} );

const Race = mongoose.model( 'Race', raceSchema );
 
module.exports = { Race }; 


