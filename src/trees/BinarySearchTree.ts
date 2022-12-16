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

  /**
   * 
   * @description inserts unique values
   */
  public insert(value: any): Ivertex | undefined {
    const newVertex = new Vertex(value);

    if (!this.root) {
      this.root = newVertex;
      return this.root;
    }
    else {
      let temp: Ivertex | null = this.root;

      while (temp) {
        if (value > temp.value) {
          if (!temp.right) {
            temp.right = newVertex;
            return temp.right;
          }
          else {
            temp = temp?.right;
          }
        }

        else if (value < temp?.value) {
          if (!temp.left) {
            temp.left = newVertex;
            return temp.left;
          }
          else {
            temp = temp?.left;
          }
        }

        else {
          break;
        }
      }
    }
  }

  public contains(value: any): boolean {
    let temp: Ivertex | null = this.root;

    while (temp) {
      if (value > temp.value) {
        if (!temp.right) {
          break;
        }
        temp = temp.right;
      }

      else if (value < temp.value) {
        if (!temp.left) {
          break;
        }
        temp = temp.left;
      }

      else if (value === temp.value) {
        return true;
      }

      else {
        break;
      }
    }

    return false;
  }
}
