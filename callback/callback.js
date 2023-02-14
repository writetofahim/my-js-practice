function myDisplayer(some) {
  // document.getElementById("demo").innerHTML = some;
}

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}

myCalculator(5, 5, myDisplayer);

// date 14 feb 2023

function myDisplayer2(result) {
  console.log(result);
}
function calculator(a, b) {
  return a + b;
}
const x = calculator(5, 4);
myDisplayer2(x);
// Here we had to call to function which is not the convention
function myDisplayer3(result) {
  console.log(result);
}
function myClaculator3(a, b) {
  const x = a + b;
  myDisplayer3(x);
}
myClaculator3(4, 4);
// here we couldn't stop the calling myDisplayer function

// here comes the callback function
function display(result) {
  console.log(result);
}
function calculator1(a, b, callback) {
  const sum = a + b;
  callback(sum);
}
calculator1(7, 8, display);
