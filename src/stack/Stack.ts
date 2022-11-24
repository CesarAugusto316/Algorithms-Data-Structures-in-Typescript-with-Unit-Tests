interface Ivertex {
  value: any,
  next: Ivertex | null
}

export class Vertex implements Ivertex {
  public next: Ivertex | null = null;

  constructor(public value: any = null) { }
}

export class Stack {
  public top: Ivertex | null = null;
  public length = 0;

  constructor(value: any = null) {
    if (value !== null) {
      this.top = new Vertex(value);
      this.length++;
      return this;
    }
  }

  public push(value: any) {
    const newVertex = new Vertex(value);
    if (!this.top) {
      this.top = newVertex;
    }
    else {
      newVertex.next = this.top;
      this.top = newVertex;
    }

    this.length++;
    return this;
  }

  public pop() {
    if (!this.top) {
      return undefined;
    }
    const temp = this.top;
    this.top = this.top.next;

    this.length--;
    temp.next = null;
    return temp;
  }
}
