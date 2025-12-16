import React from 'react';

interface Props {
	title: string;
	isActive: boolean;
}

export function MyComponent( { title, isActive }: Props ) {
	const foo = 42; // unused
	return (
		<div className={ isActive ? 'active' : 'inactive' }>
			<h1>{ title }</h1>
		</div>
	);
}
