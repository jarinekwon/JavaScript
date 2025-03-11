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

/*
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
*/

/*
// const testResults = [1, 5.3, 1.5, 10.99, -5, 10];
const testResults = [1, 5.3, 1.5, 10.99, 1.5, -5, 10];
// const storedResults = testResults;
// const storedResults = testResults.slice(); // testResults의 현재 요소까지만 복사
// const storedResults = testResults.slice(0, 2); // [1, 5.3]
// const storedResults = testResults.slice(-3, -1); // [10.99, -5], 음수를 사용하려면 모두 음수여야 함
// const storedResults = testResults.slice(2); // 두 번째 인덱스부터 끝까지
const storedResults = testResults.concat([3.99, 2]); // push와 기능 유사

testResults.push(5.91);

// console.log(testResults.slice());
console.log(storedResults, testResults);
// console.log(testResults.indexOf(1.5)); // 인덱스 위치 확인(일치하는 첫 번째 값)
console.log(testResults.lastIndexOf(1.5)); // 인덱스 위치 확인(일치하는 마지막 값)
// indexOf / lastIndexOf -> 원시 값에 관해서는 실행되지만, 참조 값에 관해서는 실행되지 않음

console.log(testResults.includes(10.99)); // 값이 포함되어 있는지 확인
console.log(testResults.indexOf(10.99) !== -1); // -1과 같지 않으면 존재하는 것

const personData = [{name: 'Max'}, {name: 'Manuel'}];
console.log(personData.indexOf({name: 'Manuel'})); // -1 반환(어떤 요소도 찾지 못할 때 값)

// find / findIndex -> 참조 값인 경우 객체나 값 식별별
const manuel = personData.find((person, idx, persons) => {
  return person.name === 'Manuel';
});

manuel.name = 'Anna';

// console.log(manuel);
console.log(manuel, personData);

const maxIndex = personData.findIndex((person, idx, persons) => {
  return person.name === 'Max';
});

console.log(maxIndex);
*/

/*
const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;
const taxAdjustedPrices = [];

// for (const price of prices) {
//   taxAdjustedPrices.push(price * (1 + tax));
// };

prices.forEach((price, idx, prices) => {
  const priceObj = {index: idx, taxAdjPrice: price * (1 + tax)};
  taxAdjustedPrices.push(priceObj);
});

console.log(taxAdjustedPrices);
*/

const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;

taxAdjustedPrices = prices.map((price, idx, prices) => {
  const priceObj = {index: idx, taxAdjPrice: price * (1 + tax)};
  return priceObj;
});

// console.log(prices, taxAdjustedPrices);

const sortedPrices = prices.sort((a, b) => {
  if (a > b) {
    return 1;
  } else if (a === b) {
    return 0;
  } else {
    return -1;
  }
}); // -1, 0, 1로 작성하면 내림차순

// console.log(sortedPrices);
console.log(sortedPrices.reverse());