"use strict";

var rlInstance = null;

module.exports = function sigintHook( opts ) {
	opts = opts || {
		eventOnHookOnly: false,
		triggerOnce: false
	};

	if ( !rlInstance ) {
		rlInstance = require( "readline" ).createInterface( {
			input: process.stdin,
			output: process.stdout
		} );

		rlInstance.on( "SIGINT", function() {
			if ( !opts.eventOnHookOnly ) {
				process.emit( "SIGINT" );
			}
			if ( opts.triggerOnce ) {
				rlInstance.close();
			}
		} );

		rlInstance.on( "close", function() {
			rlInstance = null;
		} );
	}

	return rlInstance;
};
