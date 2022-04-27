const cp = require( 'child_process' );

// Repeating this from `base/disallowed` to confirm it hasn't been overridden.
const lol = 'rm -rf all_your_files';
cp.exec( lol );

