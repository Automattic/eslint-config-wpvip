function x( y ) {
	return xIsACoolParam;
};

let things = {
	a: 13,
	cd: 99.99,
	e9: 6e99,
	f7: (  ) => ['x'],
	12: '32',
	ff: xx => xx,
	gg: ( {fds, }) =>
        fds,
};

export async function doThingsInSequence() {
	for ( const thing of Object.keys( things ) ) {
		await Promise.resolve( thing );
	}
}

export function doThingsInSequenceWithoutWaiting() {
	Object.keys( things ).forEach( async ( thing ) => {
		await Promise.resolve( thing );
	} );
}

nonExistent();
