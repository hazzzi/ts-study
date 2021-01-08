class Person {
    // 클래스 프로퍼티를 사전 선언하여야 한다
    name: string;

    constructor(name: string) {
        // 클래스 프로퍼티수에 값을 할당
        this.name = name;
    }

    walk(){
        console.log(`${this.name} is walking.`)
    }
}

const person = new Person('Lee');
person.walk();