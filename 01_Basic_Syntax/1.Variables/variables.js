// var 예시: 함수 레벨 스코프
var oldVariable = 'old';
function testVar() {
    var oldVariable = 'new'; // 이 oldVariable은 함수 외부의 oldVariable과 다릅니다.
}
testVar();
console.log(oldVariable); // 'old' 출력

// let 예시: 블록 레벨 스코프
let newVariable = 'new';
if (true) {
    let newVariable = 'block level'; // 이 newVariable은 외부의 newVariable과 다릅니다.
    console.log(newVariable); // 'block level' 출력
}
console.log(newVariable); // 'new' 출력

// const 예시: 재할당이 불가능
const constantVariable = 'constant';
// constantVariable = 'changed'; // 에러 발생: TypeError: Assignment to constant variable.

// 호이스팅 예시
console.log(hoistedVar); // undefined (호이스팅된 var 변수는 undefined로 초기화됩니다.)
var hoistedVar = 10;

// let과 const도 호이스팅되지만, 초기화 전에 접근할 수 없습니다.
// console.log(nonHoistedLet); // ReferenceError: Cannot access 'nonHoistedLet' before initialization
let nonHoistedLet = 20;

