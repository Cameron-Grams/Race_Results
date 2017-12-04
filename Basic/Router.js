const mongoose = require( 'mongoose' );
const express = require( 'express' );
const bodyParser = require( 'body-parser' ); 

const { DATABASE_URL, PORT } = require( './config/Config.js');

const router = express.Router();
const jsonParser = bodyParser.json(); 

// data model for the runners
const { Race } = require( './models/Race.js' );

router.route( '/race/:year' )
  .get( ( req, res ) => {
      console.log( 'query', req.query, ' params ', req.params ); 

      Race.find( { year: req.params.year } 
 //     .then( race => {
//          console.log( race[ 0 ] );
//          console.log( req.query.values() );
//          const runners = race[ 0 ];
//          for ( runner in runners ){
//              const runnerValues = runner.values(); 
              // if all of the properties of the objects match add to an array: this should be a map or filter function...
//          }
//      })
//        Race.find( { year: req.params.year, runners: req.query } )
//      Race.find( { year: req.params.year, "runners.city": req.query.city  } )   //  ----> thing[0]["runners"]     
      .then( race => {
          return res.json( race );
      } )
      .catch( () => res.status( 500 ).send( 'endpoint error..........' ) );
});









/*
//  querries the Race DB for the correct year

router.route('/race')
    .get( (req, res) => {  
        Race.find( { year: req.year } )
        .then( runners => { 
            res.json( runners ); 
        } )
        .catch( () => res.status( 500 ).send( 'something went wrong...' ) );
  });

*/  

module.exports = router;