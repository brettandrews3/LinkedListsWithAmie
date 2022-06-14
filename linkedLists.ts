export class Node {
    // Need something to store data
    data: any;

    // Reference to next node (rest of linked list)
    next: Node;

    constructor(data: any) {
        this.data = data;
    }
}

export default class LinkedList {
    private _head: Node;
    private _size: number;
    
    constructor() {
        this._size = 0;
    }

    // These are stubbed-out functions. Helpful when functions rely on other functions.
    size(): number {
        return this._size;
    }

    insertAt(data: any, position: number) {
        if(position < 0 || position > this._size) return;

        let newNode: Node = new Node(data);

        if(position === 0) {
            // Inserting at the head
            // If size = 0, there is no head.next
            if(this._size > 0) {
                newNode.next = this._head;
            }

            this._head = newNode;
        }
        else {
            // Inserting somewhere else
            // If inserting in the middle, find Node right before insert:
            // ***HW: Fix this current error. Work on more implementation here.
            let current: Node | any = this.findByPosition(position - 1);
            newNode.next = current.next;
            current.next = newNode;
        }

        this._size++;
    }

    deleteAt(position: number) {}

    searchByData(data: any): Node {}

    findByPosition(position: number): Node | null {
        if(position < 0 || position > this._size - 1) return null;

        let current: Node = this._head;

        // A loop of some kind:
        for(let i: number = 0; i < position; i++) {
            current = current.next;

        }
        return current;
    }

    foreach(method: (data: any) => any) {}
}