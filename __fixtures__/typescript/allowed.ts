export function add( one: number, two: number, _three: number ): number {
	return one + two;
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
