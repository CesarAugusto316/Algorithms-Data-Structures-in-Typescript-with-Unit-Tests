import { DoublyLinkedList, Vertex } from './DoublyLinkedList';


describe('DoublyLinkedList', () => {

  describe('Instantiation: new DoublyLinkedList()', () => {
    test('next, prev, length properties', () => {
      const linkedList = new DoublyLinkedList();

      expect(linkedList.head).toBe(null);
      expect(linkedList.tail).toBe(null);
      expect(linkedList.length).toBe(0);
    });

    test('head & tail should point to the same vertex if argv is passed', () => {
      const linkedList = new DoublyLinkedList(false);

      expect(linkedList.head).toBeInstanceOf(Vertex);
      expect(linkedList.tail).toBeInstanceOf(Vertex);
      expect(linkedList.length).toBe(1);
      expect(linkedList.head).toBe(linkedList.tail);
    });
  });

  describe('Method Invocation: .push()', () => {
    test('tail should have prev & next properties', () => {
      const linkedList = new DoublyLinkedList('a');
      // const testArr = ['b', 'c', 'd', 'e', 'f', 'g', 'h'];

      linkedList.push('b');
      expect(linkedList.tail?.value).toBe('b');
      expect(linkedList.tail?.next).toBe(null);
      expect(linkedList.tail?.prev?.value).toBe('a');
      expect(linkedList.tail?.prev?.next?.value).toBe('b');
      expect(linkedList.length).toBe(2);

      linkedList.push('c');
      expect(linkedList.tail?.value).toBe('c');
      expect(linkedList.tail?.next).toBe(null);
      expect(linkedList.tail?.prev?.value).toBe('b');
      expect(linkedList.tail?.prev?.next?.value).toBe('c');
      expect(linkedList.length).toBe(3);
    });

    test('tail.next & head.prev', () => {
      const linkedList = new DoublyLinkedList();
      const testArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
      const spy = jest.spyOn(linkedList, 'push');

      testArr.forEach(item => linkedList.push(item));

      expect(spy).toHaveBeenCalledTimes(testArr.length);
      expect(linkedList.length).toBe(testArr.length);
      expect(linkedList.head?.prev).toBe(null);
      expect(linkedList.tail?.next).toBe(null);
    });
  });

  describe('Method Invocation: .pop()', () => {
    test('tail should delete reference to prev', () => {
      const linkedList = new DoublyLinkedList();
      const testArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
      const spy = jest.spyOn(linkedList, 'pop');

      testArr.forEach(item => linkedList.push(item));
      testArr.forEach(() => {
        const removed = linkedList.pop();
        expect(removed?.prev).toBe(null);
        linkedList.tail && expect(linkedList.tail.next).toBe(null);
      });

      expect(spy).toHaveBeenCalledTimes(testArr.length);
      expect(linkedList.length).toBe(0);
      expect(linkedList.head).toBe(null);
      expect(linkedList.tail).toBe(null);
    });

    test('returns undefined if linkedList is empty', () => {
      const linkedList = new DoublyLinkedList();
      const removed = linkedList.pop();

      expect(removed).toBe(undefined);
    });
  });

  describe('Method Invocation: .unshift()', () => {
    test('adds items at the beginning', () => {
      const linkedList = new DoublyLinkedList();
      const testArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
      const spy = jest.spyOn(linkedList, 'unshift');

      testArr.forEach(item => linkedList.unshift(item));

      expect(spy).toHaveBeenCalledTimes(testArr.length);
      expect(linkedList.length).toBe(testArr.length);
      expect(linkedList.head?.prev).toBe(null);
      expect(linkedList.tail?.next).toBe(null);
    });
  });

  describe('Method Invocation: .shift()', () => {
    test('removes items at the beginning', () => {
      const linkedList = new DoublyLinkedList();
      const testArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

      testArr.forEach(item => linkedList.unshift(item));

      testArr.forEach(() => {
        const removed = linkedList.shift();
        expect(removed?.prev).toBe(null);
        linkedList.tail && expect(linkedList.tail.next).toBe(null);
      });

      expect(linkedList.length).toBe(0);
      expect(linkedList.head).toBe(null);
      expect(linkedList.tail).toBe(null);
    });
  });

  describe('Method Invocation: .get()', () => {
    test('returns a vertex by index, starts from zero', () => {
      const linkedList = new DoublyLinkedList();
      const testArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

      testArr.forEach(item => linkedList.push(item));

      // starting from zero
      testArr.forEach((item, i) => {
        expect(linkedList.get(i)?.value).toBe(item);
      });
    });

    test('returns a vertex by index, starts from last index', () => {
      const linkedList = new DoublyLinkedList();
      const testArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

      testArr.forEach(item => linkedList.unshift(item));

      // starting from last item
      testArr.forEach((item, i) => {
        const lastIndex = testArr.length - (1 + i);
        expect(linkedList.get(lastIndex)?.value).toBe(item);
      });
    });

  });

  describe('Method Invocation: .set()', () => {
    test('mutates the value of a vertex by index', () => {
      const linkedList = new DoublyLinkedList();
      const testArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

      testArr.forEach(item => linkedList.push(item));

      testArr.forEach((__, index) => {
        expect(linkedList.set(index, index).value).toBe(index);
      });
    });
  });
});
