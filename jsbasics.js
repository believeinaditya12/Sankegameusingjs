let a = 10; // creating a variable in the javascript
console.log(a); // output in javascript
let b = [1, 2, 3, 4, 5];
console.log(b);
// variables declaration in js
c = 20; // global variables
var d = 30; // function scope
let e = 50; // block scope
function fun() {
  // functions in javascript
  let a = 5;
  if (a == 5) {
    var f = 10;
    console.log("Inside", f);
  }
  console.log("Outside", f);
}
fun();
console.log("Global", f);
// here 1st function call will work but the second function call will not work
// it is because of function hoisting 1st type of function which is function square_root(n) will be taken to the top before it is called
// second type of functions that is  var sqrt_n = function () are not hoisted
square_root(10);
sqrt_n(10);
function square_root(n) {
  console.log("In first square root fun");
  return;
}
var sqrt_n = function () {
  console.log("In second sqrt fun");
  return;
};
// here both the function calls will work
square_root(10);
sqrt_n(10);

// arrays in javascript
let arr = ["Apple", "Mango", "Guava"];
console.log(arr);
arr["length"]; // gives the length in the console
arr.length; // property of object not a function

arr.push("Banana"); // insert at back
arr.pop(); // remove from back
arr.shift(); // remove from front
arr.unshift("Kiwi"); // insert at front
arr.indexOf("kiwi"); // to get the index of the element in the javascript
