class Stack {
    constructor() {
        this.stack = [];
    }
    push(element) {
        this.stack.push(element);
    }
    pop() {
        if (this.stack.isEmpty()) {
            return "Stack is empty";
        }
        return this.stack.pop();
    }
    size() {
        return this.stack.length;
    }
    peek() {
        if (this.stack.isEmpty()) {
            return "Stack is Empty";
        }
        return this.stack[this.stack.length - 1];
    }
    isEmpty() {
        return this.size() === 0;
    }
    printElements() {
        for (let i = 0; i < this.size(); i++) {
            process.stdout.write(this.stack[i].toString())
        }
        console.log("")
    }
}
const obj = new Stack();
obj.push(1);
obj.push(2);
obj.push(3);
obj.printElements();
console.log(obj.isEmpty());


