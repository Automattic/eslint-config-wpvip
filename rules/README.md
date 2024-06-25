# Custom rules

## `no-async-foreach`

**tl;dr:** Do not use `Array.prototype.forEach` with async/await. If you want to await a collection of tasks run in parallel, use `await Promise.all()` and `Array.prototype.map`.

If you want to await a collection of tasks run in series (which is rarely the case), then either `await` them individually without using an array or use a generator and `for await ... of`:

```js
async function* doTasks() {
	let i = 0;
	while ( i < 10 ) {
		yield i++;
	}
}

for await ( const count of doTasks() ) {
	console.log( count );
}
```

### The problem

`Array.prototype.forEach` is not designed for async/await/promises. Even if the function passed to `.forEach` is `async`, each iteration does not `await` the result.

```js
const letters = [ 'a', 'b', 'c' ];

letters.forEach( async letter => {
	await processLetter( letter );
} );

console.log( 'done! but not really' );
```

In the example above, `'done! but not really'` is logged before the promises returned by `processLetter` have resolved. This is because the array is iterated immediately and execution proceeds without awaiting promise resolution.

## `nestjs-route-prefix`

This rule checks Nest.js controller route decorators for specific conventions related to route configuration. These constraints are enforced in an effort to improve code readability and searchability within the application.

The `@Controller` and HTTP method decorators (`@Get`, `@Post`, `@Put`, `@Delete`, `@Patch`, `@Options`, `@Head`) are examined in this process.

- The `@Controller` decorator should not have any route prefixes. For example, this means `@Controller('users')` will be flagged as incorrect.

- The HTTP method decorators (`@Get`, `@Post`, etc.) should have a route that starts with `/` and does not end with `/`. For example, `@Get('/users/')` would be flagged as incorrect.
