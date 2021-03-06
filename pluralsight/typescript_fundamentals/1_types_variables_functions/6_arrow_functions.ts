var numbers: number[];
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// regular javascript ES5 notation
let odd_numbers = numbers.filter(function(num) {
  return num % 2 != 0;
});

console.log(odd_numbers);

// Typescript arrow notation
let even_numbers = numbers.filter(num => num%2 == 0);

console.log(even_numbers);

// arrow functions with more than one argument and large function body
numbers.forEach((num, idx, arr) => {
  console.log('the index of ' + num + ' is ' + idx);
  // you can have more body here
  // and here
  // and here as well
  // and so on
});
