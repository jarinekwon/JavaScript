// let name = 'Max';
// let name = 'Anna';
var name = 'Max';
// var name = 'Anna'; // 오류X(스코프 차이)
let hobbies;

if (name === 'Max') {
  // var hobbies = ['Sports', 'Cooking'];
  // let hobbies = ['Sports', 'Cooking'];
  hobbies = ['Sports', 'Cooking'];
  console.log(hobbies);
}

function greet() {
  // let age = 30;
  var age = 30;
  // let name = 'Manuel'; // overide
  var name = 'Manuel';
  console.log(name, age, hobbies);
}

// console.log(name, age);
// console.log(name);
console.log(name, hobbies);

greet();