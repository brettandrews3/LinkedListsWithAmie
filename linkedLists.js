"use strict";
exports.__esModule = true;
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
    // For each node, execute method on the node's data element
    LinkedList.prototype.foreach = function (method) {
        var current = this._head;
        for (var i = 0; i < this._size; i++) {
            method(current.data);
            current = current.next;
        }
    };
    // Transformation: takes the data from our Node, returns results of that transformation
    LinkedList.prototype.map = function (transformMethod) {
        var current = this._head;
        for (var i = 0; i < this._size; i++) {
            // transform the node's data element: accept node's data element, return result
            current.data = transformMethod(current.data);
            current = current.next;
        }
    };
    return LinkedList;
}());
exports["default"] = LinkedList;
/*
Two types of vars:
Value type: aka 'primitives';
Reference type: var itself is NOT the object--it's a reference TO the object (how linked list works)
HEAD is reference to where the object exists in memory. Don't worry about its address; it's handled
by memory mgmt from browser/console/whatever.
In linked list, this object holds a reference to the next object and so on.
Does my 'next' object exist || null? If null => you're at the end of the list.
ln 83: current = current.next;  <= that's a reference to next object in memory

Non-primitives are reference type.
current.data changes data on that object in memory. If you're writing a function that takes an object
and does something to it, you're changing where the object came from.
*/
// Arrange: have newList be a reference to this new LinkedList
var newList = new LinkedList();
newList.insertAt(0, 0);
newList.insertAt(1, 1);
newList.insertAt(2, 2);
//console.log(newList.size());
// Act
//console.log(newList.findByPosition(2));
//console.log(newList.findByPosition(1).data);
var logItAll = function (data) { return console.log(data); };
var add5 = function (data) { return data + 5; };
var addSomething = function (data) {
    if (data % 2 == 0)
        return data + 1;
    return data - 1;
};
newList.foreach(logItAll);
newList.map(add5);
newList.foreach(logItAll);
newList.map(addSomething);
newList.foreach(logItAll);
// Assert
