class LinkedListNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  addToHead(val) {
    const newNode = new LinkedListNode(val);
    if (this.isEmpty()) {
      this.head = newNode
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++
  }

  addToTail(val) {
    const newNode = new LinkedListNode(val);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next
      }
      current.next = node;
    }
    this.length++;
  }

  isEmpty() {
    return this.length === 0;
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} -> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = LinkedList;
