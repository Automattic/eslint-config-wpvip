import { unusedEs6Import } from './stub/unusedEs6Import';
import { Buffer } from 'node:buffer';

export function add( one: number, two: number, three: String ): number {
	return one + two;
}

// @ts-ignore
const things = {
	ab: 13,
	cd: 99.99,
	e9: 6e99,
	f7: () => [ 'x' ],
	12: '32',
	ff: ( xx: string ) => xx,
	gg: ( { fds } ) => fds,
};

export function multiply( one: number, two: any ): number {
	return one * two;
}

export function shadow() {
	const add = 2;
	return add;
}

export default {
	things,
};

function someCoolDecorator( totallyRadArgument, _value ): typeof totallyRadArgument {
	return totallyRadArgument;
}

@someCoolDecorator
export class EmptyClass {}

export function base64encode( str: string ): string {
	return Buffer.from( str ).toString( 'base64' );
}
