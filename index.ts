import { BinarySearchTree } from './src/trees/BinarySearchTree';


const bst = new BinarySearchTree();
bst.insert(4);
bst.insert(12);
bst.insert(18);
bst.insert(11);
bst.insert(10);
bst.insert(-10);
bst.insert(-5);
bst.insert(-4);
bst.insert(-3);

console.log(bst);

console.log(bst.contains(4));
console.log(bst.contains(12));
console.log(bst.contains(18));
console.log(bst.contains(11));
console.log(bst.contains(10));
console.log(bst.contains(-10));
console.log(bst.contains(-5));
console.log(bst.contains(-4));
console.log(bst.contains(-3));

console.log(bst.contains('13'));
console.log(bst.contains('12'));
console.log(bst.contains('-10'));
