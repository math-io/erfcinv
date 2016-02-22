'use strict';

// MODULES //

var tape = require( 'tape' );
var PINF = require( 'const-pinf-float64' );
var NINF = require( 'const-ninf-float64' );
var abs = require( 'math-abs' );
var erfcinv = require( './../lib' );


// FIXTURES //

var x1 = require( './fixtures/x_0.5_1.5.json' );
var x2 = require( './fixtures/x_0.25_0.5.json' );
var x3 = require( './fixtures/x_1.5_1.75.json' );
var x4 = require( './fixtures/x_1.75_1.9998.json' );
var x5 = require( './fixtures/x_0.0002_0.25.json' );
var x6 = require( './fixtures/x_1.9998_1.9999..8.json' );
var x7 = require( './fixtures/x_1.9999..8_2.json' );


// FUNCTIONS //

function almostEqual( a, b, tol ) {
	var delta = abs( a - b );
	tol = tol * Math.max( 1, abs( a ), abs( b ) );
	return ( delta <= tol );
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.equal( typeof erfcinv, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `NaN`, the function returns `NaN`', function test( t ) {
	var y = erfcinv( NaN );
	t.ok( y !== y, 'returns NaN' );
	t.end();
});

tape( 'if provided `0`, the function returns `+infinity`', function test( t ) {
	var y = erfcinv( 0 );
	t.equal( y, PINF, 'returns +infinity' );
	t.end();
});

tape( 'if provided `2`, the function returns `-infinity`', function test( t ) {
	var y = erfcinv( 2 );
	t.equal( y, NINF, 'returns `-infinity`' );
	t.end();
});

tape( 'if provided `1`, the function returns `0`', function test( t ) {
	var y = erfcinv( 1 );
	t.equal( y, 0, 'returns 0' );
	t.equal( 1/y, PINF, 'returns `0`' );
	t.end();
});

tape( 'if provided a value which is either less than `0` or greater than `2`, the function throws a range error', function test( t ) {
	var values;
	var i;

	values = [
		3.14,
		-3.14,
		-0.00000001,
		2.00000001,
		PINF,
		NINF
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws range error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			erfcinv( value );
		};
	}
});

tape( 'the function evaluates the inverse complementary error function for `x` on the interval `[0.5,1.5]', function test( t ) {
	var expected;
	var bool;
	var tol;
	var x;
	var y;
	var i;

	tol = 4e-16;

	expected = x1.expected;
	x = x1.x;
	for ( i = 0; i < x.length; i++ ) {
		y = erfcinv( x[i] );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'x: '+x[i]+', y: '+y+', expected: '+expected[i] );
		}  else {
			bool = almostEqual( y, expected[i], tol );
			t.ok( bool, 'within tolerance. x: '+x[i]+'. y: '+y+'. Expected: '+expected[i]+'. Tolerance: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the inverse complementary error function for `x` on the interval `[0.25,0.5]', function test( t ) {
	var expected;
	var bool;
	var tol;
	var x;
	var y;
	var i;

	tol = 4e-16;

	expected = x2.expected;
	x = x2.x;
	for ( i = 0; i < x.length; i++ ) {
		y = erfcinv( x[i] );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'x: '+x[i]+', y: '+y+', expected: '+expected[i] );
		}  else {
			bool = almostEqual( y, expected[i], tol );
			t.ok( bool, 'within tolerance. x: '+x[i]+'. y: '+y+'. Expected: '+expected[i]+'. Tolerance: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the inverse complementary error function for `x` on the interval `[1.5,1.75]', function test( t ) {
	var expected;
	var bool;
	var tol;
	var x;
	var y;
	var i;

	tol = 4e-16;

	expected = x3.expected;
	x = x3.x;
	for ( i = 0; i < x.length; i++ ) {
		y = erfcinv( x[i] );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'x: '+x[i]+', y: '+y+', expected: '+expected[i] );
		}  else {
			bool = almostEqual( y, expected[i], tol );
			t.ok( bool, 'within tolerance. x: '+x[i]+'. y: '+y+'. Expected: '+expected[i]+'. Tolerance: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the inverse complementary error function for `x` on the interval `[1.75,1.9998]', function test( t ) {
	var expected;
	var bool;
	var tol;
	var x;
	var y;
	var i;

	tol = 2.8e-15;

	expected = x4.expected;
	x = x4.x;
	for ( i = 0; i < x.length; i++ ) {
		y = erfcinv( x[i] );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'x: '+x[i]+', y: '+y+', expected: '+expected[i] );
		}  else {
			bool = almostEqual( y, expected[i], tol );
			t.ok( bool, 'within tolerance. x: '+x[i]+'. y: '+y+'. Expected: '+expected[i]+'. Tolerance: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the inverse complementary error function for `x` on the interval `[0.0002,0.25]', function test( t ) {
	var expected;
	var bool;
	var tol;
	var x;
	var y;
	var i;

	tol = 3.1e-15;

	expected = x5.expected;
	x = x5.x;
	for ( i = 0; i < x.length; i++ ) {
		y = erfcinv( x[i] );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'x: '+x[i]+', y: '+y+', expected: '+expected[i] );
		}  else {
			bool = almostEqual( y, expected[i], tol );
			t.ok( bool, 'within tolerance. x: '+x[i]+'. y: '+y+'. Expected: '+expected[i]+'. Tolerance: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the inverse complementary error function for `x` on the interval `[1.9998,1.9999..8]', function test( t ) {
	var expected;
	var bool;
	var tol;
	var x;
	var y;
	var i;

	tol = 1.85e-15;

	expected = x6.expected;
	x = x6.x;
	for ( i = 0; i < x.length; i++ ) {
		y = erfcinv( x[i] );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'x: '+x[i]+', y: '+y+', expected: '+expected[i] );
		}  else {
			bool = almostEqual( y, expected[i], tol );
			t.ok( bool, 'within tolerance. x: '+x[i]+'. y: '+y+'. Expected: '+expected[i]+'. Tolerance: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the inverse complementary error function for `x` on the interval `[1.9999..8,2]', function test( t ) {
	var expected;
	var bool;
	var tol;
	var x;
	var y;
	var i;

	tol = 1.75e-16;

	expected = x7.expected;
	x = x7.x;
	for ( i = 0; i < x.length; i++ ) {
		y = erfcinv( x[i] );
		if ( expected[ i ] === null ) {
			expected[ i ] = PINF;
		}
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'x: '+x[i]+', y: '+y+', expected: '+expected[i] );
		}  else {
			bool = almostEqual( y, expected[i], tol );
			t.ok( bool, 'within tolerance. x: '+x[i]+'. y: '+y+'. Expected: '+expected[i]+'. Tolerance: '+tol+'.' );
		}
	}
	t.end();
});


