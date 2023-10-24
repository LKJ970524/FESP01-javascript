var stack = [];
stack.push(100);
stack.push(200);
stack.push(300);

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());

var queue = [];
queue.push(100);
queue.push(200);
queue.push(300);

console.log(queue.shift());
console.log(queue.shift());
console.log(queue.shift());

console.log(stack, queue);
