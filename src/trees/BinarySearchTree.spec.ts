import { BinarySearchTree, Vertex } from './BinarySearchTree';


describe('Binary Search Tree Data Structure', () => {

  describe('Instantation', () => {

    test('when no argument is given', () => {
      const bst1 = new BinarySearchTree();
      const bst2 = new BinarySearchTree(undefined);

      expect(bst1.root).toBe(null);
      expect(bst2.root).toBe(null);
    });

    test('when a falsy argument is given', () => {
      const bst1 = new BinarySearchTree(false);
      const bst3 = new BinarySearchTree('');
      const bst4 = new BinarySearchTree(0);

      expect(bst1.root).toBeInstanceOf(Vertex);
      expect(bst4.root).toBeInstanceOf(Vertex);
      expect(bst3.root).toBeInstanceOf(Vertex);
    });
  });
});
