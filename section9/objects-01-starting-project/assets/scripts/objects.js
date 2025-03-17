/* 앱이랑 연관없는 복습 코드드
const movieList = document.getElementById('movie-list');

// movieList.style.backgroundColor = 'red';
// movieList.style['backgroundColor'] = 'red';
movieList.style['background-color'] = 'red';
movieList.style.display = 'block';

const userChosenKeyName = 'level';

// const person = {
let person = {
  // name: 'Max',
  'first name': 'Max', // 띄어쓰기나 하이픈으로 변수명을 만들 수 있는 방법, 하지만 그대로 엑세스가 불가
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  [userChosenKeyName]: '...',
  greet: function() {
    alert('Hi there');
  },
  1.5: 'hello' // 음수는 불가
};

// person.greet();

// person = {
//   name: 'Max',
//   age: 30,
//   hobbies: ['Sports', 'Cooking'],
//   greet: function() {
//     alert('Hi there');
//   },
//   isAdmin: true
// };

person.isAdmin = true;

// person.age = 31;
// delete person.age;
person.age = null;
// delete는 프로퍼티를 삭제, null은 프로퍼티 초기화

const keyName = 'first name';

// console.log(person);
// console.log(person.age);
// console.log(person['first name']); // first name을 그대로 써서 엑세스 하는 방법
// console.log(person[keyName]);
console.log(person[person[keyName]]);
console.log(person[1.5]);
console.log(person['1.5']); // 자바스크립트에서 1.5를 문자열로 강제로 변환하여 가능
console.log(person);
*/

const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

const movies = [];

const renderMovies = () => {
  const movieList = document.getElementById('movie-list');
  
  if (movies.length === 0) {
    movieList.classList.remove('visible');
    return;
  } else {
    movieList.classList.add('visible');
  }
  movieList.innerHTML = '';

  movies.forEach((movie) => {
    const movieEl = document.createElement('li');
    movieEl.textContent = movie.info.title;
    movieList.append(movieEl);
  });
};

const addMovieHandler = () => {
  const title = document.getElementById('title').value;
  const extraName = document.getElementById('extra-name').value;
  const extraValue = document.getElementById('extra-value').value;

  if (
    title.trim() === '' ||
    extraName.trim() === '' ||
    extraValue.trim() === ''
  ) {
    return;
  }

  const newMovie = {
    info: {
      title,
      [extraName]: extraValue
    },
    id: Math.random()
  };

  movies.push(newMovie);
  // console.log(newMovie);
  renderMovies();
};

addMovieBtn.addEventListener('click', addMovieHandler);