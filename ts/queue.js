var _a, _b;
var Queue = /** @class */ (function () {
    function Queue() {
        this.data = [];
    }
    Queue.prototype.push = function (item) {
        this.data.push(item);
    };
    Queue.prototype.pop = function () {
        return this.data.shift();
    };
    return Queue;
}());
var numberQueue = new Queue();
numberQueue.push(0);
numberQueue.push(+'1');
console.log((_a = numberQueue.pop()) === null || _a === void 0 ? void 0 : _a.toFixed());
var stringQueue = new Queue();
stringQueue.push('hello');
stringQueue.push('world');
console.log((_b = stringQueue.pop()) === null || _b === void 0 ? void 0 : _b.toUpperCase());
//# sourceMappingURL=queue.js.map