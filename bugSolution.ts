function add(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Invalid input: Both arguments must be numbers');
  }
  return a + b;
}

let result1 = add(10, 5); // Correct usage

//Using type guards:
function isNumber(x: any): x is number {
    return typeof x === 'number';
}

function addSafe(a: any, b: any): number {
    if (isNumber(a) && isNumber(b)) {
        return a + b;
    }
    throw new Error('Invalid input: Both arguments must be numbers');
}
let result2 = addSafe(10,5);
//let result3 = addSafe("hello",5)// This throws an error