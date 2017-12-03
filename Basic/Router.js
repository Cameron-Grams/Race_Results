const mongoose = require( 'mongoose' );
const express = require( 'express' );
const bodyParser = require( 'body-parser' ); 

const { DATABASE_URL, PORT } = require( './config/Config.js');

const router = express.Router();
const jsonParser = bodyParser.json(); 

// data model for the runners
const { Runner } = require( './models/runner' );

