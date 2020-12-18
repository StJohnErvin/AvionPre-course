// Do not change any of the function names

// solve these recursively

function nFactorial(n) {
  // return the factorial for n
  // example:
  // the factorial of 3 is 6 (3 * 2 * 1)
  if (n == 0 || n == 1)
  {
return 1;

  }else{
return n*nFactorial(n-1);

  }
 
}

function nFibonacci(n) {
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
var num1 = 0;
var num2 = 1;
var sum;
var i = 0;
for (i = 0; i < n; i++)
{

sum = num1 + num2;
num1 = num2;
num2 = sum;



}

return num2;

}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  nFactorial,
  nFibonacci,
};