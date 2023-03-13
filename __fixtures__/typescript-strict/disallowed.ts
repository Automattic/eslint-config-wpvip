export function add(one: number, two: number, three: String): number {
	return one + two;
}

export function multiply(one: number, two: any): number {
	return one * two;
}

// @ts-ignore
const things = {
	ab: 13,
	cd: 99.99,
	e9: 6e99,
	f7: () => ['x'],
	12: '32',
	ff: (xx: string) => xx,
	gg: ({ fds }) => fds,
};

const outerScopeVar = 1;
function shadow() {
	const outerScopeVar = 2;
	return outerScopeVar;
}

export default {
	things,
};
