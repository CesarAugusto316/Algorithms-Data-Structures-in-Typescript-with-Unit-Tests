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
    if (value !== null) {
      this.head = this.tail = new Vertex(value);
      this.length++;
      return this;
    }
  }

  /**
   *
   * @description O(n)
   */
  public get(index: number): Ivertex {
    if ((index >= 0 && index < this.length) && this.length) {
      let temp: Ivertex | null | undefined = this.head;

      for (let i = 0; i < index; i++) {
        temp = temp?.next;
      }

      return temp as Ivertex;
    }
    throw new TypeError('index out of range');
  }

  /**
   *
   * @description O(n)
   */
  public set(index: number, value: any): Ivertex {
    const vertex = this.get(index);
    vertex.value = value;

    return vertex;
  }

  /**
   *
   * @description O(n)
   */
  public insert(index: number, value: any) {
    if ((index >= 0) && (index <= this.length)) {
      if (index === 0) {
        return this.unshift(value);
      }
      if (index === this.length) {
        return this.push(value);
      }

      const prev = this.get(index - 1);
      const temp = prev.next;
      prev.next = new Vertex(value);
      prev.next.next = temp;
      this.length++;
      return this;
    }
    throw new TypeError('index out of range');
  }

  /**
   *
   * @description O(n)
   */
  public remove(index: number): Ivertex | undefined {
    if ((index >= 0 && index < this.length) && this.length) {
      if (index === 0) {
        return this.shift();
      }
      if (index === this.length - 1) {
        return this.pop();
      }

      const prev = this.get(index - 1);
      const temp = prev.next as Ivertex;
      prev.next = temp.next;
      temp.next = null;
      this.length--;
      return temp;
    }
    throw new TypeError('index out of range');
  }

  /**
   *
   * @description O(1)
   */
  public push(value: any) {
    const newVertex: Ivertex = new Vertex(value);

    if (!this.head && !this.tail) {
      this.head = this.tail = newVertex;
    }
    else if (this.tail) {
      this.tail.next = newVertex;
      this.tail = newVertex;
    }

    this.length++;
    return this;
  }

  /**
   *
   * @description O(1)
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

  /**
   *
   * @description O(1)
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
   * @description O(n)
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

  /**
   * 
   * @description O(n)
   */
  public reverse() {
    let prev: Ivertex | null = null;
    let curr: Ivertex | null = this.head;
    let temp: Ivertex | null;

    for (let i = 0; i < this.length; i++) {
      temp = (curr as Ivertex).next; // has all the chain of pointers
      (curr as Ivertex).next = prev; // points to the previous vertex
      prev = curr;
      curr = temp;
    }

    [this.head, this.tail] = [this.tail, this.head];
    return this;
  }

  /**
   * 
   * @description O(n)
   */
  public log() {
    let temp = this.head;

    while (temp) {
      console.log(temp);
      temp = temp.next;
    }
  }
}
