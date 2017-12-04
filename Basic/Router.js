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

      Race.find( { year: req.params.year } )
     .then( race => {
        let results = [];
        const runners = race[ 0 ].runners;
        const searchObj = req.query;
        const searchKeys = Object.keys( searchObj );
        console.log( searchKeys, ' on object ', searchObj );

        for ( let i = 0; i < runners.length; i++ ){
            searchKeys.forEach( function( searchTerm ){  /////////////////////////////
            if ( runners[ i ][ `${ searchTerm }` ] === searchObj[ `${ searchTerm }` ] ){
                results.push( runners[ i ] );
            }
            }
        ) } 
        return res.json( results );
      })
//      .then( race => {
//          return res.json( race );
//      } )
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