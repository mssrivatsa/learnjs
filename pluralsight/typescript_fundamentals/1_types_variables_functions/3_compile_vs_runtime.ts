var person;
person = "Mudambi Srivatsa";
console.log(person.substring(1,4));

person = {
  name: "Mudambi Srivatsa",
  age: 25
}

// Run time error - person does not have a substring method
// console.log(person.substring(1,4));

var person2: string;
person2 = "Mudambi Srivatsa";
console.log(person2.substring(1,4));

// Compile time error - cannot assign different types to a string
// person2 = {
//   name: "Mudambi Srivatsa",
//   age: 25
// }
//
// console.log(person2.substring(1,4));
