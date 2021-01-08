# ts-study

## 타입 선언
- 타입 선언은 강력한 타입 체크를 가능하게 하여 문법 에러나 타입과 일치하지 않는 값의 할당 등 기본적인 오류를 런타임 이전에 검출

```ts
// 변수 선언
let foo: string = 'hello';

// 함수 선언
function multiply1(x: number, y: number): number{
    return x * y;
}

// 함수 표현식
const multiply2 = (x: number, y: number): number => x * y
```
- 자바 스크립트 타입 이외에 사용할수있는 고유의 타입
  | type  | desc                                                   |
  | ----- | ------------------------------------------------------ |
  | tuple | 고정된 요소 수만큼의 타입을 미리 선언 후 배열을 표현   |
  | enum  | 열거형                                                 |
  | any   | 타입추론 할 수 없거나 타입 체크가 필요없는 변수에 사용 |
  | void  | 일반적으로 함수에서 반환값이 없을 경우 사용            |
  | never | 결코 발생하지 않는값                                   |
  - ```ts
    // tuple
    let tuple: [string, number];
    tuple = ['hello', 10]
    tuple = [10, 'hello'] // error
    tuple = ['hello', 10, 'world', 100] // error
    tuple.push(true) // error

    // enum
    enum Color1 {Red, Green, Blue};
    let c1: Color1 = Color.Green; // 1

    enum Color2 {Red = 1, Green, Blue};
    let c2: Color2 = Color2.Green; // 2

    enum Color3 {Red = 1, Green = 2, Blue = 4};
    let c3: Color3 = Color3.Blue; // 4

    // void
    function warnUser(): void {
        console.log('warning message')
    }

    // never
    function infiniteLoof(): never{
        while(true) {}
    }
    ```
- 객체의 유형도 타입이 될 수 있다.
  - ex) 
    - `const today: Date = new Date();`
    - `const elem: HTMLElement = document.getElementById('myId');`
    - `const person: Person = new Person()`

## 정적 타이핑
- 타입이 결정된 후에는 타입을 변경할 수 없다.
- 잘못된 타입의 값이 할당 또는 반환되면 컴파일러가 이를 감지한다.
- 장점: 코드 가독성, 예측성, 안정성 향상

## 타입 추론(type inference)
- `let foo = 123;` 타입을 선언하진 않았으나 타입추론에 의해서 number 타입으로 결정됨. 
- 타입이 결정 된 후에는 타입을 변경할 수 없음
- 타입 선언 생략하고 값도 할당하지 않아서 타입추론을 할수 없을땐 `any` 타입이 됨.

## 인터페이스
- 변수 타입으로 사용할 수 있다.
```ts 
// 인터페이스 정의
interface Todo {
  id: number;
  content: string;
  completed: boolean;
}

let todo: Todo;

todo = { id: 1, content: 'typescript', completed: false };
```
- 함수 인터페이스
```ts
// 함수 인터페이스 정의
interface SquareFunc {
  (num: number): number;
}

// 함수 인터페이스 구현
const squareFunc: SquareFunc = function (num: number) {
  return num * num;
}

console.log(squareFunc(10))
```
- TypeScript는 해당 인터페이스에서 정의한 `프로퍼티`나 `메소드`를 가지고 있다면 그 인터페이스를 `구현`한 것으로 인정한다. 이것을 덕 타이핑(duck typing) 또는 구조적 타이핑(structural typing)이라 한다.

인터페이스를 변수에 사용할 경우에도 덕 타이핑은 적용된다.

```ts
interface IDuck { // 1
  quack(): void;
}

class MallardDuck implements IDuck { // 3
  quack() {
    console.log('Quack!');
  }
}

class RedheadDuck { // 4
  quack() {
    console.log('q~uack!');
  }
}

function makeNoise(duck: IDuck): void { // 2
  duck.quack();
}

makeNoise(new MallardDuck()); // Quack!
makeNoise(new RedheadDuck()); // q~uack! // 5
```
- 인터페이스의 프로퍼티가 선택적으로 필요한경우 `?` 를 붙인다.
  - ex: `age? : number;`
- `extends` 키워드를 사용하여 인터페이스 또는 클래스를 상속받을 수 있다. 복수의 인터페이스 상속 가능

## 타입 앨리어스
- 인터페이스와 유사하지만 원시값, 유니온 타입, 튜플 등도 타입으로 지정가능
- extends 또는 implements 될 수 없다.
```ts
// 문자열 리터럴
type Str = 'Lee';

// 유니온
type Union = string | null;

// 문자열 유니온
type Name = 'Lee' | 'Kim';

// 숫자 리터럴 유니온
type Num = 1 | 2 | 3 | 4;

// 객체 리터럴 유니온
type Obj = { a: 1 } | {b: 2};

// 함수 유니온
type Func = (() => string) | (() => void)

// 인터페이스 유니온
type Shape = Square | Rectangle | Circle;

// 튜플로 타입지정
type Tuple = [string, boolean];
const t: Tuple = ['', '']; // error
```