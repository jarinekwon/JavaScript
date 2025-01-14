// Heap -> 장기 메모리 / Stack -> 단기 메모리

function getName() {
  return prompt('Your name: ', '');
}

function greet() {
  const userName = getName();
  console.log('Hello ' + userName);
}

greet();