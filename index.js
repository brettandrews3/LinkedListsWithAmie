import Queue from "./Queue";

const cars = new Queue();

cars.enqueue('Honda');
cars.enqueue('Toyota');
cars.enqueue('Nissan');

console.log(cars);              // [Honda, Toyota, Nissan]
console.log(cars.dequeue());
console.log(cars);              // [Toyota, Nissan]