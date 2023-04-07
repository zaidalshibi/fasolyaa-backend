'use strict';

const { start } = require( './server' );
require( 'dotenv' ).config();
const port = process.env.PORT || 3001;
const {db} = require('./Database')


db.sync().then(() => {
start( port );
});