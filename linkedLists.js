"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Node = void 0;
var Node = /** @class */ (function () {
    function Node(data) {
        this.data = data;
    }
    return Node;
}());
exports.Node = Node;
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this._size = 0;
    }
    // These are stubbed-out functions. Helpful when functions rely on other functions.
    LinkedList.prototype.size = function () {
        return this._size;
    };
    LinkedList.prototype.insertAt = function (data, position) {
        if (position < 0 || position > this._size)
            throw 'Position is not valid. Check list size.'; // Find end of list and tack on newNode
        var newNode = new Node(data);
        if (position === 0) {
            // Inserting at the head
            // If size = 0, there is no head.next
            // Amie: if statement really isn't necessary here, but good for clarification
            if (this._size > 0) {
                newNode.next = this._head;
            }
            this._head = newNode;
        }
        else {
            // Inserting somewhere else
            // If inserting in the middle, find Node right before insert:
            var current = this.findByPosition(position - 1);
            newNode.next = current.next; // 'newNode.next' = the rest of the list (MUST PRESERVE)
            current.next = newNode; // inserts newNode into the list
        }
        this._size++;
    };
    LinkedList.prototype.deleteAt = function (position) {
        // make sure our position is valid
        if (position < 0 || position > this._size - 1)
            throw 'Position is not within this list. Check list size.';
        // Edge case for deletion: deleting the head node at position 0
        if (position === 0) {
            // Assign a new head before deleting the existing one; this would preserve the linked list(?)
            // Assigning _head to .next here allows garbage man to remove old head automatically
            this._head = this._head.next;
        }
        else {
            // delete reference to node from somewhere else in the list
            // Identify the node before the one we're deleting
            var current = this.findByPosition(position - 1);
            current.next = current.next.next; // technically off list's end if we're deleting the last element
        }
        this._size--;
    };
    //searchByData(data: any): Node {}
    LinkedList.prototype.findByPosition = function (position) {
        if (position < 0 || position > this._size - 1) {
            throw 'Position is not within the list. Check list size.';
        }
        var current = this._head;
        // A loop of some kind:
        for (var i = 0; i < position; i++) {
            current = current.next; // current now points to next element
        }
        return current; // returns reference to node when i reaches position
    };
    // Transformation: takes the data from our Node, returns results of that transformation
    LinkedList.prototype.foreach = function (method) { };
    return LinkedList;
}());
exports.default = LinkedList;
//# sourceMappingURL=linkedLists.js.map