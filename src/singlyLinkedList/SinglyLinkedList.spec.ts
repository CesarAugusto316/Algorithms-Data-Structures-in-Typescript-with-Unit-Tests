import { LinkedList, Vertex } from './SinglyLinkedList';


describe('LinkedList', () => {

  describe('Instantiation: new LinkedList()', () => {
    it('should have a length, head & tail properties', () => {
      const linkedList = new LinkedList();

      expect(linkedList).toHaveProperty('head');
      expect(linkedList).toHaveProperty('tail');
      expect(linkedList).toHaveProperty('lenght');
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

      expect(linkedList.head).toBe(linkedList.tail);
      expect(linkedList.lenght).toBe(1);
      expect(linkedList.tail?.next).toBe(null);
    });

    test('head & tail should not point to the same vertex, when length === 1', () => {
      const linkedList = new LinkedList(3);
      linkedList.push(11);

      expect(linkedList.head).not.toBe(linkedList.tail);
      expect(linkedList.lenght).toBe(2);
      expect(linkedList.tail?.next).toBe(null);
    });
  });

  describe('Method Invocation: .pop()', () => {
    it('should return undefined when length === 0', () => {
      const linkedList = new LinkedList();
      const result = linkedList.pop();

      expect(result).toBe(undefined);
    });

    it('should return a Vertex, head & tail === null, when length >= 1', () => {
      const linkedList = new LinkedList(3);
      const result = linkedList.pop();

      expect(result).toBeInstanceOf(Vertex);
      expect(linkedList.lenght).toBe(0);
      expect(linkedList.head).toBe(null);
      expect(linkedList.tail).toBe(null);
    });

    it('should return a Vertex & decrement length, when length >= 2', () => {
      const linkedList = new LinkedList(3);
      linkedList.push(27);
      linkedList.push(11);
      const result = linkedList.pop();

      expect(result).toBeInstanceOf(Vertex);
      expect(linkedList.lenght).toBe(2);
      expect(linkedList.head).toBeInstanceOf(Vertex);
      expect(linkedList.tail).toBeInstanceOf(Vertex);
      expect(linkedList.tail?.next).toBe(null);
    });
  });
});
