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