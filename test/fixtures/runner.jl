# To run this script, `cd` to the `./test/fixtures` directory and then, from the Julia terminal, `include("./runner.jl")`.

import JSON

function gen( x, name )
	y = Array( Float64, length( x ) );
	for i in eachindex(x)
		y[i] = erfcinv( x[i] );
	end

	data = Dict([
		("x", x),
		("expected", y)
	]);

	outfile = open( name, "w" );
	write( outfile, JSON.json(data) );
	close( outfile );
end

# 0.5 <= x <= 1.5 (linear regime)
x = linspace( 0.5, 1.5, 3000 );
gen( x, "x_0.5_1.5.json" );

# 0.25 < 2-x < 0.5
x = linspace( 1.5, 1.75, 500 );
gen( x, "x_1.5_1.75.json" );

# 0.25 < x < 0.5
x = linspace( 0.25, 0.5, 500 );
gen( x, "x_0.25_0.5.json" );

# 0.25 < 2-x < 0.00012340980408664937
x = linspace( 1.75, 1.9998, 500 );
gen( x, "x_1.75_1.9998.json" );

# 0.00012340980408664937 < x < 0.25  
x = linspace( 0.0002, 0.25, 500 );
gen( x, "x_0.0002_0.25.json" );

# 0.00012340980408664937 < 2-x < 2.220446049250313e-16
x = linspace( 1.9998, 1.9999999999999998, 500 );
gen( x, "x_1.9998_1.9999..8.json" );

# 2.220446049250313e-16 < 2-x < 0
x = linspace( 1.9999999999999998, 2, 500 );
gen( x, "x_1.9999..8_2.json" );