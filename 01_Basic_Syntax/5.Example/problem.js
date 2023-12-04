// 변수 선언 및 할당:
var x = 5; // var를 사용한 변수 선언 및 할당
let y = 10; // let을 사용한 변수 선언 및 할당
const z = 15; // const를 사용한 변수 선언 및 할당

// 기본 데이터 타입
let str = "문자열"; // 문자열
let num = 42; // 숫자
let isTrue = true; // 불린
let empty = null; // null
let notDefined = undefined; // undefined

// 복잡한 데이터 타입
let person = { name: "John", age: 30 }; // 객체
let colors = ["빨강", "파랑", "노랑"]; // 배열

// 산술 연산자
let num1 = 10;
let num2 = 5;
let sum = num1 + num2;
console.log(sum); // 결과: 15

// 할당 연산자
let x = 10;
x += 5; // x = x + 5와 동일
console.log(x); // 결과: 15

// 비교 연산자
let a = 5;
let b = "5";
console.log(a == b); // 결과: true
console.log(a === b); // 결과: false

// 논리 연산자
let isSunny = true;
let isWarm = false;
console.log(isSunny && isWarm); // 결과: false
console.log(isSunny || isWarm); // 결과: true
console.log(!isSunny); // 결과: false

// 조건문 (if...else):
let number = 7;
if (number > 0) {
  console.log("양수입니다.");
} else if (number < 0) {
  console.log("음수입니다.");
} else {
  console.log("0입니다.");
}

// 조건 (삼항) 연산자:
let num = 8;
let result = num % 2 === 0 ? "짝수" : "홀수";
console.log(result); // 결과: "짝수"

// 문제
// 변수 day에 요일을 문자열로 할당하고, 해당 요일에 따른 스케줄을 출력하는 switch 문을 작성하세요.
// (예: "월요일 - 회의", "화요일 - 운동" 등)

// 답변
let day = "수요일";
switch (day) {
  case "월요일":
    console.log("회의");
    break;
  case "화요일":
    console.log("운동");
    break;
  case "수요일":
    console.log("영화 관람");
    break;
  default:
    console.log("휴식");
}

// 문제
// for 반복문을 사용하여 1부터 10까지의 숫자를 출력하는 코드를 작성하세요.

// 답변
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 문제
// while 반복문을 사용하여 1부터 10까지의 숫자를 출력하는 코드를 작성하세요.

// 답변
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

// 문제
// do...while 반복문을 사용하여 1부터 10까지의 숫자를 출력하는 코드를 작성하세요.

// 답변
let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 10);

// 문제
// 문자열로 구성된 배열을 생성하고, 배열의 길이와 요소를 출력하는 코드를 작성하세요.

// 답변
let fruits = ["사과", "바나나", "딸기"];
console.log(fruits.length); // 배열의 길이 출력 (3)
console.log(fruits[0]); // 첫 번째 요소 출력 ("사과")

// 문제
// 사용자 정보(이름, 나이, 이메일)를 포함하는 객체를 생성하고, 객체의 속성을 출력하는 코드를 작성하세요.

// 답변
let user = {
  name: "Alice",
  age: 28,
  email: "alice@example.com",
};

console.log(user.name); // 이름 출력 ("Alice")
console.log(user.age); // 나이 출력 (28)

// 심화 학습지
/* 변수 스코프 (Variable Scope):

변수 스코프란 변수가 유효한 범위를 나타냅니다. 다시 말해, 변수가 어디서 접근 가능하고 어디서는 접근 불가능한지를 정의합니다.
JavaScript에서는 두 가지 주요한 변수 스코프가 있습니다.
전역 스코프 (Global Scope): 전역 스코프에서 선언된 변수는 어디서든지 접근 가능하며, 프로그램 전체에서 유효합니다.
지역 스코프 (Local Scope): 함수 내에서 선언된 변수는 해당 함수 내부에서만 접근 가능하며, 함수의 외부에서는 접근할 수 없습니다.
*/

// 전역 스코프에서 선언된 변수
var globalVar = "전역 변수";

function exampleFunction() {
  // 지역 스코프에서 선언된 변수
  var localVar = "지역 변수";
  console.log(globalVar); // 접근 가능
}

console.log(globalVar); // 접근 가능
console.log(localVar); // 접근 불가능 (에러 발생)

/*
호이스팅 (Hoisting):

호이스팅은 JavaScript 엔진이 코드를 실행하기 전에 변수 및 함수 선언을 미리 "끌어올리는" 동작을 의미합니다.
변수 선언(var, let, const)과 함수 선언(function)이 호이스팅의 대상입니다. 다만, var로 선언한 변수와 함수 선언은 다르게 동작합니다.
var로 선언한 변수는 선언부만 호이스팅되며, 초기화(값 할당)는 그 위치에 그대로 남게 됩니다. 이로 인해 변수는 선언 전에 사용할 때 undefined가 됩니다.
*/
console.log(myVar); // undefined
var myVar = 10;
console.log(myVar); // 10

// 함수 선언은 선언과 동시에 초기화되므로 함수 내부에서 선언한 함수는 함수 호출 전에도 사용할 수 있습니다.
greet(); // "안녕하세요!"

function greet() {
  console.log("안녕하세요!");
}

// let과 const로 선언한 변수는 호이스팅이 되지만, 초기화되기 전까지 "일시적 사각지대(Temporal Dead Zone, TDZ)"에 있으므로 사용하려고 하면 에러가 발생합니다.

console.log(myVar); // 에러 (TDZ에서 사용하려고 함)
let myVar = 10;
console.log(myVar); // 10
