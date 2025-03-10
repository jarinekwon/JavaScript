/*
const numbers = [1, 2, 3]; // 대괄호 방식이 성능이 가장 빠름
console.log(numbers);

// const moreNumbers = new Array(); // []
// const moreNumbers = new Array('Hi', 'Welcome');
// const moreNumbers = new Array(5); // [empty x 5], length: 5
// -> 단일 숫자만 넣으면 만들어질 배열에 대한 길이로 표시되며 그 길이 만큼의 빈 배열이 생성
// const moreNumbers = Array(5);
// -> 단일 숫자만 넣으면 만들어질 배열에 대한 길이로 표시되며 그 길이 만큼의 빈 배열이 생성
// const moreNumbers = Array(5, 2);
// console.log(moreNumbers);

// const yetMoreNumbers = Array.of(1, 2);
// console.log(yetMoreNumbers);

const listItems = document.querySelectorAll('li');
console.log(listItems);

// const moreNumbers = Array.from(1, 2); // 인수를 여러 개 넣으면 오류가 남
// Array.from() -> iterable이나 유사 배열 객체를 변환, 배열을 넣어도 됨됨
// const moreNumbers = Array.from([1, 2, 3]);
// const moreNumbers = Array.from('Hi!'); // 문자열이 하나씩 분리되어 배열로 표현
const arrayListItems = Array.from(listItems);
console.log(arrayListItems);

const hobbies = ['Cooking', 'Sports'];
const personalData = [30, 'Max', {moreDerail: []}];

const analyticsData = [[1, 1.6], [-5.4, 2.1]];

for(const data of analyticsData) {
  for(const dataPoint of data) {
    console.log(dataPoint);
  }
}

console.log(personalData[1]);
*/

const hobbies = ['Sports', 'Cooking'];
hobbies.push('Reading'); // 배열 마지막에 추가
hobbies.unshift('Coding'); // 배열 첫번째에 추가
// hobbies.pop(); // 마지막 요소 삭제
const poppedValue = hobbies.pop();
hobbies.shift(); // 첫번째 요소 삭제
console.log(hobbies);

hobbies[1] = 'Coding'; // 위치를 지정해서 변경 또는 삽입
// hobbies[5] = 'Reading';
console.log(hobbies);
// console.log(hobbies, hobbies[4]); // hobbies[4] -> 빈 공간이라 undefined 출력

// hobbies.splice(0, 0, 'Good Food');
hobbies.splice(1, 0, 'Good Food');
console.log(hobbies);

// hobbies.splice(0, 1); // -> 두 번째 인자에 값을 넣지 않으면 모두 삭제
const removedElements = hobbies.splice(-1, 1); // 음수로 값을 지정하면 배열의 끝에서부터 확인
console.log(hobbies);