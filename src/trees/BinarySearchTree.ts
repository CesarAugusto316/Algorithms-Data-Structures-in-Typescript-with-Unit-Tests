interface Ivertex {
  value: any,
  left: Ivertex | null,
  right: Ivertex | null
}


export class Vertex implements Ivertex {
  public left: Ivertex | null = null;
  public right: Ivertex | null = null;

  constructor(public value: any = null) { }
}


export class BinarySearchTree {
  public root: Ivertex | null = null;

  constructor(value: any = null) {
    if (value !== null) {
      this.root = new Vertex(value);
    }
  }

  public insert(value: any) {
    const newVertex = new Vertex(value);
    if (!this.root) {
      this.root = newVertex;
    }
    else {
      let temp: Ivertex | null | undefined = this.root;

      while (temp) {
        if (value > temp.value) {
          temp = temp?.right;
        }
        else if (value < temp?.value) {
          temp = temp?.left;
        }
        else if (!value) {
          (temp as Ivertex).value = newVertex;
          break;
        }
      }
    }
  }
}
