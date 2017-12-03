const express = require( 'express' );

const mongoose = require( 'mongoose' );
mongoose.Promise = global.Promise; 

var bodyParser = require('body-parser');  
var morgan = require('morgan');  

const app = express();
const {PORT, DATABASE_URL} = require('./config/mainConfig.js');

// change based on runner model 
const {User} = require('./models/user'); 

const sessionRouter = require('./sessionRouter');
const userRouter = require('./userRouter');
 
app.use( bodyParser.urlencoded( { extended: false } ) ); 
app.use( bodyParser.json() );
app.use( morgan( 'dev' ) );

app.use( passport.initialize() );
const { basicStrategy: Strategy } = require( './config/passportStrategy' );
Strategy( passport );

app.use( express.static( 'public' ) );  

app.use('/api', sessionRouter);
app.use('/api', userRouter);

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