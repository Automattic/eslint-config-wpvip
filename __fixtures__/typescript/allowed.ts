/**
 * This function adds two integers together.
 */
export function add( one: number, two: number, _three: number ): number {
	return one + two;
}

/**
 * This function subtracts two integers from one another.
 *
 * @param one
 * @param two
 */
export function subtract( one: number, two: number ): number {
	return one - two;
}

const things = {
	ab: 13,
	cd: 99.99,
	e9: 6e99,
	f7: () => [ 'x' ],
	12: '32',
	ff: ( xx: string ) => xx,
	gg: ( { fds } ) => fds,
};

export default {
	things,
};
