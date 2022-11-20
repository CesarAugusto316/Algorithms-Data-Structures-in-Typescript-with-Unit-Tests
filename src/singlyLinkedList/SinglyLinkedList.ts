interface Ivertex {
  value: any,
  next: Ivertex | null
}

export class Vertex implements Ivertex {
  constructor(
    public value: any = null,
    public next: Ivertex | null = null
  ) { }
}

export class LinkedList {
  public head: Ivertex | null = null;
  public tail: Ivertex | null = null;
  public length = 0;

  constructor(value: any = null) {
    if (value) {
      this.head = this.tail = new Vertex(value);
      this.length++;
      return this;
    }
  }

  /**
   *
   * @BigO O(1)
   */
  public push(value: any) {
    const newVertex: Ivertex = new Vertex(value);

    if (!this.head && !this.tail) {
      this.head = this.tail = newVertex;
    }
    else if (this.tail) {
      this.tail.next = this.tail = newVertex;
    }

    this.length++;
    return this;
  }

  /**
   *
   * @BigO O(1)
   */
  public unshift(value: any) {
    const newVertex: Ivertex = new Vertex(value);

    if (!this.head && !this.tail && this.length === 0) {
      this.head = this.tail = newVertex;
      this.length++;
      return this;
    }

    const prev = this.head;
    this.head = newVertex;
    newVertex.next = prev;
    this.length++;
    return this;
  }

  // /**
  //  *
  //  * @BigO O(n)
  //  */
  // public insert(value: any) {
  //   const newVertex = new Vertex(value);
  // }

  /**
   *
   * @BigO O(1)
   */
  public shift(): Ivertex | undefined {
    if (this.head && this.tail && this.length === 1) {
      const temp = this.head;
      this.head = this.tail = null;
      this.length--;
      return temp;
    }
    if (this.head && this.tail && this.length >= 2) {
      const temp = this.head;
      this.head = this.head.next;
      temp.next = null;
      this.length--;
      return temp;
    }

    return undefined;
  }

  /**
   *
   * @BigO O(n)
   */
  public pop(): Ivertex | undefined {
    if (this.head && this.tail && this.length >= 2) {
      let temp = this.head;
      let prev!: Ivertex;

      while (temp.next) {
        prev = temp;
        temp = temp.next;
      }

      prev.next = null;
      this.tail = prev;
      this.length--;
      return temp;
    }

    if (this.head && this.tail && this.length === 1) {
      const temp = this.tail;
      this.head = this.tail = null;
      this.length--;
      return temp;
    }

    return undefined;
  }
}
