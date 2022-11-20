import { LinkedList, Vertex } from './SinglyLinkedList';


describe('LinkedList', () => {

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
    it('should throw error when array is empty', () => {
      const linkedList = new LinkedList();
      const testArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

      testArr.forEach((item, index) => {
        linkedList.insert(index, item);
        expect(linkedList.get(index).value).toBe(item);
      });
    });

    it('should throw error when array is empty', () => {
      const linkedList = new LinkedList();
      const testArr = [];
      const error = new TypeError('index out of range');

      expect(() => linkedList.get(-1)).toThrow(error);
      expect(() => linkedList.get(testArr.length)).toThrow(error);
    });
  });
});
