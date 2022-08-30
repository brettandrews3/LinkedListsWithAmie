import LinkedList from "./linkedLists";

export default class Stack extends LinkedList {
    push(data: any) {
        this.insertAt(data, 0);
    }

    // Function call findByPostion() goes to linked list and returns head
    // at position 0. The function literally resolves into a node reference.
    // It's like having a variable there like newNode. Returns data at .data,
    // Data from node is stored in dataToReturn. All done just to get the data
    // we want to delete.
    pop(): any {
        let dataToReturn: any = this.findByPosition(0).data;
        this.deleteAt(0);
        return dataToReturn;
    }

    // Show what the data is at the head node:
    peek(): any {
        return this.findByPosition(0).data;
    }
}

// ***HW: Make a queue. You can use a double-ended linked list. Queue has
// 2 functions: enqueue() and dequeue(). enqueue() adds an item to the end of the line.
// dequeue() takes an item from the front of the line. It's a checkout line at the store.

// If you want to make your stack safe, check the size of the linked list. If size = 0, then
// throw an error.