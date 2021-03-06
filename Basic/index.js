const express = require( 'express' );

const mongoose = require( 'mongoose' );
mongoose.Promise = global.Promise; 

var bodyParser = require('body-parser');  
var morgan = require('morgan');  

const app = express();
const { PORT, DATABASE_URL } = require( './config/Config.js' );

// change based on runner model 
// const { Runner } = require( './models/Runners' ); 
const { Race } = require( './models/Race' ); 

const Router = require('./Router');
 
app.use( bodyParser.urlencoded( { extended: false } ) ); 
app.use( bodyParser.json() );
app.use( morgan( 'dev' ) );


app.use( express.static( 'public' ) );  

app.use('/api', Router);

let server;
  
function runServer(databaseUrl = DATABASE_URL, port = PORT ){
    return new Promise( ( resolve, reject ) => {
        mongoose.connect( databaseUrl, err => {
          if ( err ){
            return reject( err );
          }
          server = app.listen( port, () => {
            console.log( `Listening on port ${ port }`);
            resolve();
          })
          .on( 'error', err => {
            mongoose.disconnect();
            reject( err );
          } )
        } )
    } );
};

function closeServer(){
  return mongoose.disconnect().then( () => {    
    return new Promise( ( resolve, reject ) => {
      console.log( 'Closing Server' );
      server.close( err => {
        if ( err ){
          reject( err );
          return;
        }
        resolve();
      } );
    } )
  } )
};



if ( require.main === module ){
  runServer().catch( err => console.error( err ) );
};

module.exports = { app, runServer, closeServer };