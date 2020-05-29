// console.log('utils is running ');

const square = (x) => x * x;
// export const square = (x) => x*x; it's equivalent
const add = (a, b) => a + b;

const substract = (a, b) => a - b;

export { square, add, substract as default };
// the name is not important for a default export
// export default function_name OR function_expresion;
