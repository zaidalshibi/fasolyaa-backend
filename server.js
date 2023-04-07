'use strict';

const express = require( 'express' );
const app = express();
const cors = require( 'cors' );
const userRoutes = require( './Routes/users.routes' );

app.use( cors() );
app.use( express.json() );
app.use( '/users', userRoutes );

app.get( '/', ( req, res ) => {
    res.send( 'Hello World!' );
} );

function start( port ) {
    app.listen( port, () => {
        console.log( `Server running on port ${port}` );
    } );
}

module.exports = {
    app,
    start
};