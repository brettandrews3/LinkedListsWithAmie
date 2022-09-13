export default class Queue {
    //items: any[];

    constructor() {
        // Create a built-in array to hold our items
        this.items = [];
    }

    // Use array's push() to add items to the queue
    enqueue(item) {
        this.items.push(item);
    }

    // Use array's shift() to remove, return first item from the queue
    dequeue() {
        return this.items.shift();
        // [Apple, Banana] => dequeue() => [Banana]   >Apple
    }

    // Show first item in array without removing it. Return null if no items in array
    peek() {
        return this.items[0];
    }

    // Return size of the array
    getSize() {
        return this.items.length;
    }

    // If size is zero, then it's empty
    isEmpty() {
        return this.getSize() === 0;
    }
}

//This model would be slower potentially because the machine has to resize the array