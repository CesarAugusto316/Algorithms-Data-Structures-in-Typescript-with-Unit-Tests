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

  describe('Method .insert()', () => {
    const bst = new BinarySearchTree();

    it('should insert a node at the root when tree is empty', () => {
      const value = 10;
      const inserted = bst.insert(value);

      expect(bst.root).toBeInstanceOf(Vertex);
      expect(bst.root).not.toBe(null);
      expect(bst.root?.value).toBe(value);
      expect(inserted?.value).toBe(value);
    });

    it('should add a value at the right', () => {
      const value = 20;
      const inserted = bst.insert(value);

      expect(bst.root?.right).toBeInstanceOf(Vertex);
      expect(bst.root?.right).not.toBe(null);
      expect(bst.root?.right?.value).toBe(value);
      expect(inserted?.value).toBe(value);
    });

    it('should add a value at the left', () => {
      const value = -20;
      const inserted = bst.insert(value);

      expect(bst.root?.left).toBeInstanceOf(Vertex);
      expect(bst.root?.left).not.toBe(null);
      expect(bst.root?.left?.value).toBe(value);
      expect(inserted?.value).toBe(value);
    });

    it('should not allow duplicates nodes', () => {
      const value = 20;
      const inserted = bst.insert(value);

      expect(inserted).toBe(undefined);
    });
  });

  describe('Method .contains()', () => {
    const bst = new BinarySearchTree();

    it('should contain a node at the root', () => {
      const value = 10;
      bst.insert(value);

      expect(bst.contains(value)).toBe(true);
    });

    it('should contain a value at the right', () => {
      const value = 20;
      bst.insert(value);

      expect(bst.contains(value)).toBe(true);
    });

    it('should contain a value at the left ', () => {
      const value = -20;
      bst.insert(value);

      expect(bst.contains(value)).toBe(true);
    });

    it('contains non duplicates values', () => {
      const value = 20;
      bst.insert(value);

      expect(bst.contains(value)).toBe(true);
    });
  });
});
