// Initialize with annotation
var num: number = 2;
console.log(num);

// Initialize without annotation
var num2 = 3;
console.log(num2);

// Type inference
var num3 = num + num2;
console.log(num3);

// Type inference
var str1 = num3 + 'some string';
console.log(str1);

// Errors out - compile time error - cannot assign string to number
// var num4: number  = num3 + 'some string';
