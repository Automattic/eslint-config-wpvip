# Custom rules

## `no-async-foreach`

**tl;dr:** Do not use `Array.prototype.forEach` with async/await. If you want to await a collection of tasks run in parallel, use `await Promise.all()` and `Array.prototype.map`.

If you want to await a collection of tasks run in series (which is rarely the case), then either `await` them individually without using an array or use a generator and `for await ... of`:

```js
async function* doTasks() {
  let i = 0;
  while (i < 10) {
    yield i++;
  }
}

for await (const count of doTasks()) {
	console.log(count);
}
```

### The problem

`Array.prototype.forEach` is not designed for async/await/promises. Even if the function passed to `.forEach` is `async`, each iteration does not `await` the result. 

```js
const letters = ['a', 'b', 'c'];

letters.forEach(async letter => {
  await processLetter(letter);
});

console.log('done! but not really');
```

In the example above, `'done! but not really'` is logged before the promises returned by `processLetter` have resolved. This is because the array is iterated immediately and execution proceeds without awaiting promise resolution.
