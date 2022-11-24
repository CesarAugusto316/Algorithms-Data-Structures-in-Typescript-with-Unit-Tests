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

  public get(index: number) {
    if (this.length >= 0 && this.length - 1) {
      const middle = Math.floor(this.length / 2);

      if (index < middle) {
        let temp = this.head;
        for (let i = 0; i < index; i++) {
          temp = (temp as Ivertex).next;
        }
        return temp;
      }
      let temp = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        temp = (temp as Ivertex).prev;
      }
      return temp;
    }

    throw new TypeError('index out of range');
  }

  public set(index: number, value: any) {
    const temp = this.get(index) as Ivertex;
    temp.value = value;

    return temp;
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

      const prev = this.get(index - 1) as Ivertex;
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
      const temp = prev?.next as Ivertex;
      (prev as Ivertex).next = temp.next;
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
    if (this.tail) {
      const temp = this.tail;
      const prev = this.tail.prev;

      if (this.length === 1) {
        this.head = this.tail = null;
      }
      if (this.length >= 2) {
        [this.tail, (this.tail as Ivertex).next, temp.prev]
          = [prev, null, null];
      }

      this.length--;
      return temp;
    }

    return undefined;
  }

  public unshift(value: any) {
    const newVertex = new Vertex(value);

    if (!this.head) {
      this.head = this.tail = newVertex;
    }
    else {
      [newVertex.next, this.head.prev, this.head]
        = [this.head, newVertex, newVertex];
    }

    this.length++;
    return this;
  }

  public shift() {
    if (this.head) {
      const temp = this.head;
      const next = this.head.next as Ivertex;

      if (this.length === 1) {
        this.head = this.tail = null;
      }
      if (this.length >= 2) {
        this.head = next;
        this.head.prev = null;
        temp.prev = temp.next = null;
      }

      this.length--;
      return temp;
    }

    return undefined;
  }

  public log() {
    let temp = this.head;

    while (temp) {
      console.log(temp);
      temp = temp.next;
    }
  }
}
