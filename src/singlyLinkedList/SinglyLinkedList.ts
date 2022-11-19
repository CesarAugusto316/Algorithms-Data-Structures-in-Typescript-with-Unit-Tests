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
  public lenght = 0;

  constructor(value: any = null) {
    if (value) {
      this.head = this.tail = new Vertex(value);
      this.lenght++;
      return this;
    }
  }

  /**
   *
   * @BigO O(1)
   */
  public push(value: any) {
    const newVertex = new Vertex(value);

    if (!this.head && !this.tail) {
      this.head = this.tail = newVertex;
    }
    else if (this.tail) {
      this.tail.next = this.tail = newVertex;
    }

    this.lenght++;
    return this;
  }

  /**
   *
   * @BigO O(1)
   */
  public unshift(value: any) {
    const newVertex = new Vertex(value);

    if (!this.head || !this.tail) {
      this.head = this.tail = newVertex;
      return this;
    }

    const prev = this.head;
    this.head = newVertex;
    newVertex.next = prev;
    this.lenght++;
    return this;
  }

  // /**
  //  *
  //  * @BigO O(n)
  //  */
  // public insert(value: any) {
  //   const newVertex = new Vertex(value);
  // }

  // /**
  //  *
  //  * @BigO O(n)
  //  */
  // public shift() { }

  /**
   *
   * @BigO O(n)
   */
  public pop() {
    if (this.head && this.tail && this.lenght > 1) {
      let temp = this.head;
      let prev!: Vertex;

      while (temp.next) {
        prev = temp;
        temp = temp.next;
      }

      prev.next = null;
      this.tail = prev;
      this.lenght--;
      return temp;
    }

    if (this.head && this.tail && this.lenght === 1) {
      const temp = this.head;
      this.head = this.tail = null;
      this.lenght--;
      return temp;
    }

    return undefined;
  }
}
