class MyClass {
	public doStuff() {
		return 'real';
	}
}

const myClass = new MyClass();
myClass.doStuff = jest.fn( () => 'fake' );

describe( 'TypeScript test', () => {
	it( 'should allow unbound mocks to be called and inspected', () => {
		const value = myClass.doStuff();

		expect( myClass.doStuff ).toHaveBeenCalledTimes( 1 );
		expect( value ).toEqual( 'fake' );
	} );
} );
