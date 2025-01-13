// // let name = 'Max';
// // let name = 'Anna';
// var name = 'Max';
// // var name = 'Anna'; // 오류X(스코프 차이)
// let hobbies;

// if (name === 'Max') {
//   // var hobbies = ['Sports', 'Cooking'];
//   // let hobbies = ['Sports', 'Cooking'];
//   hobbies = ['Sports', 'Cooking'];
//   console.log(hobbies);
// }

// function greet() {
//   // let age = 30;
//   var age = 30;
//   // let name = 'Manuel'; // overide
//   var name = 'Manuel';
//   console.log(name, age, hobbies);
// }

// // console.log(name, age);
// // console.log(name);
// console.log(name, hobbies);

// greet();

// ----------------------------------------------------------------------------------

// var userName; 
// var userName = 'Max'; // var는 사용 전에 선언하고 초기값을 설정해두는 것이 좋음
// var userName = 'Manuel'; // 값을 재설정 하는 것은 괜찮지만 재선언 하는 것은 피해야 함
'use strict'; // strict mode는 선언만 하면 알아서 실행(선택사항)

// userName = 'Max'; // javascript에서는 자동으로 변수 선언은 var를 추가(Strict mode 사용하면 불가)
const userName = 'Max';
var undefined = 5;

console.log(userName);

// var userName = 'Max';
// let userName = 'Max'; // const와 let은 hoisting이 var처럼 작동하지 않음
// userName = 'Max';