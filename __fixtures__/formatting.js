const a = [1, 2];
const b = { c:1 };
const d = "double";
const e = `template ${ a }`;
function f (x){
  return x+1
}


const g = f( a ) ? {
	value: b,
	  } : { value: d };

module.exports = { a, b, d, e, f, g };
