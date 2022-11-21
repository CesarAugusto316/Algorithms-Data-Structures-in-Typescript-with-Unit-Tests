interface Ivertex {
  value: any,
  next: Ivertex | null,
  prev: Ivertex | null
}

export class Vertex implements Ivertex {
  next: Ivertex | null = null;
  prev: Ivertex | null = null;

  constructor(public value: any = null) { }
}

export class DoublyLinkedList {
  head: Ivertex | null = null;
  tail: Ivertex | null = null;
  length = 0;

  constructor(value: any = null) {
    if (value !== null) {
      this.head = this.tail = new Vertex(value);
      this.length++;
    }
  }

  /**
   * 
   * @description O(1)
   */
  public push(value: any) {
    const newVertex = new Vertex(value);

    if (!this.tail) {
      this.head = this.tail = newVertex;
    }
    else {
      [newVertex.prev, this.tail.next, this.tail]
        = [this.tail, newVertex, newVertex];
    }

    this.length++;
    return this;
  }

  /**
   * 
   * @description O(1)
   */
  public pop() {
    if (this.head && this.tail) {
      const last = this.tail;

      if (this.length === 1) {
        this.head = this.tail = null;
      }
      if (this.length >= 2) {
        this.tail = this.tail?.prev as Ivertex;
        this.tail.next = null;
        last.prev = null;
      }

      this.length--;
      return last;
    }

    return undefined;
  }
}
