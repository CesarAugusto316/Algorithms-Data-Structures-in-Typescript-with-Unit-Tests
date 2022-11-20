import { LinkedList, Vertex } from './SinglyLinkedList';


describe('SinglyLinkedList', () => {

  describe('Instantiation: new LinkedList()', () => {
    it('should have a length, head & tail properties', () => {
      const linkedList = new LinkedList();

      expect(linkedList).toHaveProperty('head');
      expect(linkedList).toHaveProperty('tail');
      expect(linkedList).toHaveProperty('length');
    });

    it('should have head & tail === null when no argument is given to the constructor', () => {
      const linkedList = new LinkedList();

      expect(linkedList.head).toBe(null);
      expect(linkedList.tail).toBe(null);
    });

    test('head & tail are instances fo Vertex when instantiated with a value', () => {
      const linkedList = new LinkedList('my value');

      expect(linkedList.head).toBeInstanceOf(Vertex);
      expect(linkedList.tail).toBeInstanceOf(Vertex);
      expect(linkedList.tail?.next).toBe(null);
    });
  });

  describe('Method Invocation: .push()', () => {
    test('head & tail should point to the same vertex when length === 0', () => {
      const linkedList = new LinkedList();
      linkedList.push(3);

      expect(linkedList.tail?.value).toBe(3);
      expect(linkedList.head).toBe(linkedList.tail);
      expect(linkedList.length).toBe(1);
      expect(linkedList.tail?.next).toBe(null);
    });

    test('head & tail should not point to the same vertex, when length === 1 & when length >= 2', () => {
      const linkedList = new LinkedList(3);
      linkedList.push(11);

      expect(linkedList.tail?.value).toBe(11);
      expect(linkedList.head).not.toBe(linkedList.tail);
      expect(linkedList.length).toBe(2);
      expect(linkedList.tail?.next).toBe(null);

      linkedList.push(13);
      expect(linkedList.tail?.value).toBe(13);
      expect(linkedList.head).not.toBe(linkedList.tail);
      expect(linkedList.length).toBe(3);
      expect(linkedList.tail?.next).toBe(null);
    });
  });

  describe('Method Invocation: .pop()', () => {
    it('should return undefined when length === 0', () => {
      const linkedList = new LinkedList();
      const result = linkedList.pop();

      expect(result).toBe(undefined);
    });

    it('should return a Vertex, head & tail === null, when length === 1', () => {
      const linkedList = new LinkedList(3);
      const result = linkedList.pop();

      expect(result).toBeInstanceOf(Vertex);
      expect(linkedList.length).toBe(0);
      expect(linkedList.head).toBe(null);
      expect(linkedList.tail).toBe(null);
    });

    it('should return a Vertex & decrement length, when length >= 2', () => {
      const linkedList = new LinkedList(3);
      linkedList.push(27);
      linkedList.push(11);
      const result = linkedList.pop();

      expect(result).toBeInstanceOf(Vertex);
      expect(linkedList.length).toBe(2);
      expect(linkedList.head).toBeInstanceOf(Vertex);
      expect(linkedList.tail).toBeInstanceOf(Vertex);
      expect(linkedList.tail?.next).toBe(null);
    });
  });

  describe('Method Invocation: .unshift()', () => {
    afterEach(() => {
      // restore the spy created with spyOn
      jest.restoreAllMocks();
    });

    it('should add an item at the start, when length === 0', () => {
      const linkedList = new LinkedList();
      const spy = jest.spyOn(linkedList, 'unshift');
      linkedList.unshift('a');

      expect(spy).toHaveBeenCalledWith('a');
      expect(linkedList.head?.value).toBe('a');
      expect(linkedList.length).toBe(1);
      expect(linkedList.head).toBe(linkedList.tail);
      expect(linkedList.tail?.next).toBe(null);
    });

    it('should add an item at the start, when length >= 1', () => {
      const linkedList = new LinkedList('b');
      const spy = jest.spyOn(linkedList, 'unshift');
      linkedList.unshift('a');

      expect(spy).toHaveBeenCalledWith('a');
      expect(spy).toHaveBeenCalledTimes(1);
      expect(linkedList.head?.value).toBe('a');
      expect(linkedList.length).toBe(2);
      expect(linkedList.head).not.toBe(linkedList.tail);
      expect(linkedList.tail?.next).toBe(null);

      linkedList.unshift('c');

      expect(spy).toHaveBeenCalledWith('c');
      expect(spy).toHaveBeenCalledTimes(2);
      expect(linkedList.head?.value).toBe('c');
      expect(linkedList.length).toBe(3);
      expect(linkedList.head).not.toBe(linkedList.tail);
      expect(linkedList.tail?.next).toBe(null);

      linkedList.unshift('d');

      expect(spy).toHaveBeenCalledWith('d');
      expect(spy).toHaveBeenCalledTimes(3);
      expect(linkedList.head?.value).toBe('d');
      expect(linkedList.length).toBe(4);
      expect(linkedList.head).not.toBe(linkedList.tail);
      expect(linkedList.tail?.next).toBe(null);
    });
  });

  describe('Method Invocation: .shift()', () => {
    afterEach(() => {
      // restore the spy created with spyOn
      jest.restoreAllMocks();
    });

    it('should remove an item at the start, when length >= 2', () => {
      const linkedList = new LinkedList('a');
      linkedList.push('b');
      linkedList.push('c');
      const spy = jest.spyOn(linkedList, 'shift');

      const removed1 = linkedList.shift();
      expect(spy).toHaveBeenCalledTimes(1);
      expect(removed1?.value).toBe('a');
      expect(linkedList.head?.value).toBe('b');
      expect(linkedList.length).toBe(2);

      const removed2 = linkedList.shift();
      expect(spy).toHaveBeenCalledTimes(2);
      expect(removed2?.value).toBe('b');
      expect(linkedList.head?.value).toBe('c');
      expect(linkedList.length).toBe(1);

      const removed3 = linkedList.shift();
      expect(spy).toHaveBeenCalledTimes(3);
      expect(removed3?.value).toBe('c');
      expect(linkedList.head).toBe(null);
      expect(linkedList.tail).toBe(null);
      expect(linkedList.length).toBe(0);
    });

    it('should remove an item at the start, when length === 1', () => {
      const linkedList = new LinkedList('a');
      const spy = jest.spyOn(linkedList, 'shift');

      const removed1 = linkedList.shift();
      expect(spy).toHaveBeenCalledTimes(1);
      expect(removed1?.value).toBe('a');
      expect(linkedList.head).toBe(null);
      expect(linkedList.tail).toBe(null);
      expect(linkedList.length).toBe(0);

      const removed2 = linkedList.shift();
      expect(spy).toHaveBeenCalledTimes(2);
      expect(removed2).toBe(undefined);
      expect(linkedList.head).toBe(null);
      expect(linkedList.tail).toBe(null);
      expect(linkedList.length).toBe(0);
    });

    it('should return undefined when length === 0', () => {
      const linkedList = new LinkedList();
      const spy = jest.spyOn(linkedList, 'shift');

      const removed = linkedList.shift();
      expect(spy).toHaveBeenCalledTimes(1);
      expect(removed).toBe(undefined);
      expect(linkedList.head).toBe(null);
      expect(linkedList.tail).toBe(null);
      expect(linkedList.length).toBe(0);
    });
  });

  describe('Method Invocation: .get()', () => {
    it('should get an item by index', () => {
      const linkedList = new LinkedList();
      const testArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

      testArr.forEach(item => linkedList.push(item));

      testArr.forEach((item, index) => {
        expect(linkedList.get(index).value).toBe(item);
      });

      expect(linkedList.tail?.next).toBe(null);
    });

    it('should throw out of range error', () => {
      const linkedList = new LinkedList();
      const testArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
      const error = new TypeError('index out of range');

      testArr.forEach(item => linkedList.push(item));

      expect(() => linkedList.get(-1)).toThrow(error);
      expect(() => linkedList.get(testArr.length)).toThrow(error);
    });

    it('should throw error when array is empty', () => {
      const linkedList = new LinkedList();
      const testArr = [];
      const error = new TypeError('index out of range');

      expect(() => linkedList.get(-1)).toThrow(error);
      expect(() => linkedList.get(testArr.length)).toThrow(error);
    });
  });

  describe('Method Invocation: .insert()', () => {
    it('should insert an item in sequential order', () => {
      const linkedList = new LinkedList();
      const testArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

      testArr.forEach((item, index) => {
        linkedList.insert(index, item);
      });

      testArr.forEach((item, index) => {
        expect(linkedList.get(index).value).toBe(item);
      });

      expect(linkedList.length).toBe(testArr.length);
      expect(linkedList.tail?.next).toBe(null);
    });

    it('should insert an item in the same position repeatedly', () => {
      const linkedList = new LinkedList();
      const testArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
      const samePosition = 0;

      testArr.forEach((item) => {
        linkedList.insert(samePosition, item);
        // ['g', 'f', 'e', 'd', 'c', 'b', 'a']
        expect(linkedList.get(samePosition).value).toBe(item);
      });

      expect(linkedList.length).toBe(testArr.length);
      expect(linkedList.tail?.next).toBe(null);

      [...testArr]
        .reverse()
        // ['g', 'f', 'e', 'd', 'c', 'b', 'a']
        .forEach((item, index) => {
          expect(linkedList.get(index).value).toBe(item);
        });
    });

    it('should throw error when inserting in a not allowed index', () => {
      const linkedList = new LinkedList();
      const testArr = [];
      const error = new TypeError('index out of range');

      expect(() => linkedList.insert(-1, 'test')).toThrow(error);
      expect(() => linkedList.insert(testArr.length + 1, 'test')).toThrow(error);
    });
  });

  describe('Method Invocation: .remove()', () => {
    let linkedList: LinkedList;
    const testArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

    beforeEach(() => {
      linkedList = new LinkedList();
      testArr.forEach(item => linkedList.push(item));
    });

    it('should remove an item (start)', () => {
      testArr.forEach((item) => {
        const removed = linkedList.remove(0);

        expect(removed?.value).toBe(item);
        expect(removed?.next).toBe(null);
      });

      expect(linkedList.length).toBe(0);
      expect(linkedList.head).toBe(null);
      expect(linkedList.tail).toBe(null);
    });

    it('should remove an item (end)', () => {
      testArr.forEach((__, index) => {
        const lastIndex = testArr.length - (1 + index);
        const removed = linkedList.remove(lastIndex);

        expect(removed?.value).toBe(testArr[lastIndex]);
        expect(removed?.next).toBe(null);
      });

      expect(linkedList.length).toBe(0);
      expect(linkedList.head).toBe(null);
      expect(linkedList.tail).toBe(null);
    });
  });

  describe.only('Method Invocation: .reverse()', () => {
    it('should reverse a linkedList', () => {
      const linkedList = new LinkedList();
      const testArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
      testArr.forEach(item => linkedList.push(item));

      linkedList.reverse();

      [...testArr]
        .reverse()
        .forEach((item, index) => {
          expect(linkedList.get(index).value).toBe(item);
        });
    });
  });
});
