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

"use strict"
const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

const movies = [];

// const renderMovies = () => {
const renderMovies = (filter = '') => {
  const movieList = document.getElementById('movie-list');

  if (movies.length === 0) {
    movieList.classList.remove('visible');
    return;
  } else {
    movieList.classList.add('visible');
  }
  movieList.innerHTML = '';

  const filteredMovies = !filter
    ? movies
    : movies.filter((movie) => movie.info.title.includes(filter));

  // movies.forEach((movie) => {
  filteredMovies.forEach((movie) => {
    const movieEl = document.createElement('li');
    const {info, ...otherProps} = movie;
    console.log(otherProps);
    // const {title} = info;
    // const {title: movieTitle} = info;
    // const {getFormattedTitle} = movie;
    let {getFormattedTitle} = movie;
    // movieEl.textContent = movie.info.title + ' - ' + movie.info[extraName];
    // let text = movie.info.title + ' - ';
    // let text = info.title + ' - ';
    // let text = title + ' - ';
    // let text = movieTitle + ' - ';
    // let text = getFormattedTitle() + ' - ';
    // let text = movie.getFormattedTitle() + ' - ';
    // getFormattedTitle = getFormattedTitle.bind(movie);
    // let text = getFormattedTitle() + ' - ';
    // let text = getFormattedTitle.call(movie) + ' - '; // 쉼표로 구분된 목록으로 추가 인자를 전달 call( , , , )
    let text = getFormattedTitle.apply(movie) + ' - '; // 배열로서 추가 인자 전달 apply( , [])
    // for (const key in movie.info) {
    for (const key in info) {
      if (key !== 'title' && key !== '_title') {
        // text = text + `${key}: ${movie.info[key]}`;
        text = text + `${key}: ${info[key]}`;
      }
    }
    movieEl.textContent = text;
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
      // title,
      set title(val) {
        if (val.trim() === '') {
          this._title = 'DEFAULT';
          return;
        }
        this._title = val;
      },
      get title() {
        return this._title;
      },
      [extraName]: extraValue,
    },
    id: Math.random().toString(),
    // getFormattedTitle: function() {
    getFormattedTitle() {
    // getFormattedTitle: () => { // 오류(화살표 함수에는 this가 어느 것에도 바인딩 되지 않아서)
      console.log(this);
      return this.info.title.toUpperCase();
    }
  };

  newMovie.info.title = title;
  console.log(newMovie.info.title);

  movies.push(newMovie);
  // console.log(newMovie);
  renderMovies();
};

const searchMovieHandler = () => { // window를 나타냄(화살표 함수에는 this가 어느 것에도 바인딩 되지 않아서)
// const searchMovieHandler = function() { // 이 이벤트를 트리거하는 데에 책임이 있는 주체(요소)를 나타냄
  console.log(this);
  const filterTerm = document.getElementById('filter-title').value;
  renderMovies(filterTerm);
};

addMovieBtn.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click', searchMovieHandler);