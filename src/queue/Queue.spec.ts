import { Queue } from './Queue';


describe('Queue Data Structure', () => {
  describe('Method invocation: .enqueue()', () => {
    it('should add an item at the end of the queue', () => {
      const queue = new Queue();
      const testArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
      const spy = jest.spyOn(queue, 'enqueue');

      testArr.forEach((item) => {
        queue.enqueue(item);
        expect(queue.last?.value).toBe(item);
        expect(queue.last?.next).toBe(null);
      });

      expect(spy).toHaveBeenCalledTimes(testArr.length);
      expect(queue.length).toBe(testArr.length);
      expect(queue.first).not.toBe(queue.last);
    });
  });

  describe('Method invocation: .dequeue()', () => {
    it('should remove an item at the beginning of the queue', () => {
      const queue = new Queue();
      const testArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
      const spy = jest.spyOn(queue, 'dequeue');

      testArr.forEach((item) => queue.enqueue(item));

      testArr.forEach((item) => {
        const removed = queue.dequeue();

        expect(removed?.value).toBe(item);
        expect(removed?.next).toBe(null);
      });

      expect(spy).toHaveBeenCalledTimes(testArr.length);
      expect(queue.length).toBe(0);
      expect(queue.first).toBe(null);
      expect(queue.last).toBe(null);
    });
  });
});
