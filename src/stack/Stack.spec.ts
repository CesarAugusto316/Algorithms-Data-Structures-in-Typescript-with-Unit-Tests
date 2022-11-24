import { Stack, Vertex } from './Stack';


describe('Stack Data Structure', () => {
  describe('Instantiation', () => {
    it('should have top & length properties', () => {
      const stack = new Stack();

      expect(stack).toHaveProperty('top');
      expect(stack).toHaveProperty('length');
      expect(stack.top).toBe(null);
      expect(stack.length).toBe(0);
    });

    test('top should be an instance of Vertex', () => {
      const stack = new Stack('a');

      expect(stack.top).toBeInstanceOf(Vertex);
      expect(stack.top?.next).toBe(null);
      expect(stack.length).toBe(1);
    });
  });

  describe('Method invocation: .push()', () => {
    it('should add an item at the end of the stack', () => {
      const stack = new Stack();
      const testArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
      const spy = jest.spyOn(stack, 'push');

      testArr.forEach((item, i) => {
        stack.push(item);

        (i === 0) ?
          expect(stack.top?.next).toBe(null) :
          expect(stack.top?.next).toBeInstanceOf(Vertex);
      });

      expect(spy).toHaveBeenCalledTimes(testArr.length);
      expect(stack.length).toBe(testArr.length);
      expect(stack.top?.value).toBe(testArr[testArr.length - 1]);
    });
  });

  describe('Method invocation: .pop()', () => {
    it('should remove an item at the end of the stack', () => {
      const stack = new Stack();
      const testArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
      const spy = jest.spyOn(stack, 'pop');

      testArr.forEach(item => stack.push(item));

      testArr.forEach((__, index) => {
        const lastItem = testArr.length - (1 + index);
        const removed = stack.pop();

        expect(removed?.next).toBe(null);
        expect(removed?.value).toBe(testArr[lastItem]);
      });

      expect(spy).toHaveBeenCalledTimes(testArr.length);
      expect(stack.length).toBe(0);
      expect(stack.top).toBe(null);
    });
  });
});
