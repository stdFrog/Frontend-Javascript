var Stack = [];

Stack.push("Microsoft");
Stack.push("google");
Stack.push("Apple");

console.log(Stack);

Stack.push(Stack.pop());
console.log(Stack);

Stack.unshift("Youtue");
console.log(Stack);
Stack.shift("Youtue");
console.log(Stack);
