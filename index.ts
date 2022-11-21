import { DoublyLinkedList } from './src/doublyLinkedList/DoublyLinkedList';


const linkedList = new DoublyLinkedList();
const testArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
testArr.forEach(item => linkedList.push(item));
testArr.forEach(() => linkedList.pop());

console.log(linkedList);
