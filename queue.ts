class Queue<T> {
    protected data: Array<T> = [];

    push(item: T) {
        this.data.push(item);
    }

    pop(): T | undefined {
        return this.data.shift();
    }
}

const numberQueue = new Queue<number>();

numberQueue.push(0)
numberQueue.push(+'1');

console.log(numberQueue.pop()?.toFixed());

const stringQueue = new Queue<string>();

stringQueue.push('hello')
stringQueue.push('world')

console.log(stringQueue.pop()?.toUpperCase())