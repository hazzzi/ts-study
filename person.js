var Person = /** @class */ (function () {
    function Person(name) {
        // 클래스 프로퍼티수에 값을 할당
        this.name = name;
    }
    Person.prototype.walk = function () {
        console.log(this.name + " is walking.");
    };
    return Person;
}());
var person = new Person('Lee');
person.walk();
//# sourceMappingURL=person.js.map