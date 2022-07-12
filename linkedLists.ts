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
        if(position < 0 || position > this._size) throw 'Position is not valid. Check list size.';       // Find end of list and tack on newNode

        let newNode: Node = new Node(data);

        if(position === 0) {
            // Inserting at the head
            // If size = 0, there is no head.next
            // Amie: if statement really isn't necessary here, but good for clarification
            if(this._size > 0) {
                newNode.next = this._head;
            }

            this._head = newNode;
        }
        else {
            // Inserting somewhere else
            // If inserting in the middle, find Node right before insert:
            let current: Node = this.findByPosition(position - 1);
            newNode.next = current.next;            // 'newNode.next' = the rest of the list (MUST PRESERVE)
            current.next = newNode;                 // inserts newNode into the list
        }

        this._size++;
    }

    deleteAt(position: number) {
        // make sure our position is valid
        if (position < 0 || position > this._size - 1) throw 'Position is not within this list. Check list size.';

        // Edge case for deletion: deleting the head node at position 0
        if (position === 0) {
            // Assign a new head before deleting the existing one; this would preserve the linked list(?)
            // Assigning _head to .next here allows garbage man to remove old head automatically
            this._head = this._head.next;
        }
        else {
            // delete reference to node from somewhere else in the list
            // Identify the node before the one we're deleting
            let current: Node = this.findByPosition(position - 1);
            current.next = current.next.next;       // technically off list's end if we're deleting the last element
        }

        this._size--;
    }

    //searchByData(data: any): Node {}

    findByPosition(position: number): Node {
        if (position < 0 || position > this._size - 1) {
            throw 'Position is not within the list. Check list size.';
        }

        let current: Node = this._head;

        // A loop of some kind:
        for(let i: number = 0; i < position; i++) {
            current = current.next;         // current now points to next element

        }
        return current;                     // returns reference to node when i reaches position
    }

    // Transformation: takes the data from our Node, returns results of that transformation
    foreach(method: (data: any) => any) {}
}