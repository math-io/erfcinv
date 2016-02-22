'use strict';

var linspace = require( 'compute-linspace' );
var erfcinv = require( './../lib' );

var x = linspace( 0, 2, 100 );
var y;
var i;

for ( i = 0; i < x.length; i++ ) {
	y = erfcinv( x[ i ] );
	console.log( 'x: %d, erfcinv(x): %d', x[ i ], y );
}