import { unusedEs6Import } from './stub/unusedEs6Import';
import { Buffer } from 'node:buffer';

const cp = require( 'child_process' );

const lol = 'rm -rf all_your_files';
cp.exec( lol );

const indirectModule = '../../../../.aws/credentials.json';
require( indirectModule );

const dosPattern = '((x+x+)+y)'.repeat( 100 );
new RegExp( dosPattern );

function x( y ) {
	return xIsACoolParam;
}

let things = {
	a: 13,
	cd: 99.99,
	e9: 6e99,
	f7: () => [ 'x' ],
	12: '32',
	ff: xx => xx,
	gg: ( { fds } ) => fds,
};

export async function doThingsInSequence() {
	for ( const thing of Object.keys( things ) ) {
		await Promise.resolve( thing );
	}
}

export function doThingsInSequenceWithoutWaiting() {
	Object.keys( things ).forEach( async thing => {
		await Promise.resolve( thing );
	} );
}

export function shadow() {
	const lol = 2;
	return lol;
}

// eslint-disable-next-line no-unused-vars
const implicitCoercion = !! 'heyyy';

nonExistent();

export function base64encode( str ) {
	return Buffer.from( str ).toString( 'base64' );
}
