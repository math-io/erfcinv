erfcinv
===
[![NPM version][npm-image]][npm-url] [![Build Status][build-image]][build-url] [![Coverage Status][coverage-image]][coverage-url] [![Dependencies][dependencies-image]][dependencies-url]

> [Inverse complementary error function][erfcinv].

The [inverse complementary error function][erfcinv] is defined as

<div class="equation" align="center" data-raw-text="\operatorname{erfc}^{-1}(1-z) = \operatorname{erf}^{-1}(z)" data-equation="eq:inverse_complementary_error_function">
	<img src="https://cdn.rawgit.com/math-io/erfcinv/e0e111637a1ab5556330a1d52a9fccf1882a5b23/docs/img/erfcinv.svg" alt="Inverse complementary error function.">
	<br>
</div>

where erf<sup>-1</sup>(*z*) is the [inverse error function][erfinv].


## Installation

``` bash
$ npm install math-erfcinv
```


## Usage

``` javascript
var erfcinv = require( 'math-erfcinv' );
```

#### erfcinv( x )

Evaluates the [inverse complementary error function][erfcinv].

``` javascript
var y = erfcinv( 0.5 );
// returns ~0.4769

y = erfcinv( 0.8 );
// returns ~0.1791

y = erfcinv( 0 );
// returns +infinity

y = erfcinv( 2 );
// returns -infinity
```

The domain of `x` is restricted to `[0,2]`. If `x` is outside this interval, the `function` will throw a `RangeError`.

``` javascript
var y = erfcinv( -3.14 );
// throws <Error>
```

If provided `NaN`, the `function` returns `NaN`.

``` javascript
var y = erfcinv( NaN );
// returns NaN
```


## Examples

``` javascript
var linspace = require( 'compute-linspace' );
var erfcinv = require( 'math-erfcinv' );

var x = linspace( 0, 2, 100 );
var y;
var i;

for ( i = 0; i < x.length; i++ ) {
	y = erfcinv( x[ i ] );
	console.log( 'x: %d, erfcinv(x): %d', x[ i ], y );
}
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


---
## Tests

### Unit

This repository uses [tape][tape] for unit tests. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul][istanbul] as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


### Browser Support

This repository uses [Testling][testling] for browser testing. To run the tests in a (headless) local web browser, execute the following command in the top-level application directory:

``` bash
$ make test-browsers
```

To view the tests in a local web browser,

``` bash
$ make view-browser-tests
```

<!-- [![browser support][browsers-image]][browsers-url] -->


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2016. The [Compute.io][compute-io] Authors.


[npm-image]: http://img.shields.io/npm/v/math-erfcinv.svg
[npm-url]: https://npmjs.org/package/math-erfcinv

[build-image]: http://img.shields.io/travis/math-io/erfcinv/master.svg
[build-url]: https://travis-ci.org/math-io/erfcinv

[coverage-image]: https://img.shields.io/codecov/c/github/math-io/erfcinv/master.svg
[coverage-url]: https://codecov.io/github/math-io/erfcinv?branch=master

[dependencies-image]: http://img.shields.io/david/math-io/erfcinv.svg
[dependencies-url]: https://david-dm.org/math-io/erfcinv

[dev-dependencies-image]: http://img.shields.io/david/dev/math-io/erfcinv.svg
[dev-dependencies-url]: https://david-dm.org/dev/math-io/erfcinv

[github-issues-image]: http://img.shields.io/github/issues/math-io/erfcinv.svg
[github-issues-url]: https://github.com/math-io/erfcinv/issues

[tape]: https://github.com/substack/tape
[istanbul]: https://github.com/gotwarlost/istanbul
[testling]: https://ci.testling.com

[compute-io]: https://github.com/compute-io/
[erfcinv]: https://en.wikipedia.org/wiki/Error_function#Inverse_functions
[erfinv]: https://github.com/math-io/erfinv