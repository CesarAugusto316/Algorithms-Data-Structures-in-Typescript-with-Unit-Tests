interface Ivertex {
  next: Ivertex | null,
  value: any
}

export class Vertex implements Ivertex {
  public next: Ivertex | null = null;

  constructor(public value: any = null) { }
}

export class Queue {
  public first: Ivertex | null = null;
  public last: Ivertex | null = null;
  public length = 0;

  constructor(value: any = null) {
    if (value !== null) {
      this.first = this.last = new Vertex(value);
      this.length++;
    }
  }

  public enqueue(value: any) {
    const newVertex = new Vertex(value);

    if (!this.last) {
      this.first = this.last = newVertex;
    }
    else {
      this.last.next = this.last = newVertex;
    }

    this.length++;
    return this;
  }

  public dequeue() {
    if (this.first) {
      const temp = this.first;

      if (this.length === 1) {
        this.first = this.last = null;
      }
      if (this.length >= 2) {
        this.first = this.first?.next as Ivertex;
        temp.next = null;
      }

      this.length--;
      return temp;
    }

    return undefined;
  }
}
