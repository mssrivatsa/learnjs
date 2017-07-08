var square_root: Function;

// the return parameter is specified as follows:
square_root = function(x: number): number {
  return Math.sqrt(x);
}

var x: number = 121;
var ans: number = square_root(x);
console.log('square root of '+ x + ' is ' + ans);
