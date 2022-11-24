import { Stack } from './src/stack/Stack';


const stack = new Stack();
const testArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
testArr.forEach(item => stack.push(item));

console.log(stack);
