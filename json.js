// oops concepts in javascript
// it allows to create objects without defining the class
// json stands for javascript object notation
var bird = {}; // this is a empty object
var bird2 = {
  x: 100,
  y: 20,
  color: "blue",
  eggs: [1, 2, 3, 4],
  // functions expressions are not hoisted so we will use this type of function
  fly: function () {
    console.log("Bird is flying", this.x, this.y); // it will give coordinates at which bird is flying
  },
};
// for loop
for (let i = 0; i < bird2.eggs.length; i++) {
  console.log(bird2.eggs[i]);
}
// for each loop
bird2.eggs.forEach(function (val, idx) {
  console.log(idx, val);
});

// more methods to create classes and objects in javascript
// one way of creating the function
function Fruit(taste, color) {
  this.color = color;
  this.taste = taste;
}
// new keyword
let mango = new Fruit("sweet", "yellow");
let orange = new Fruit("sour", "orange");
// second way of creating function
var apple = {
  taste: "sweet",
  color: "red",
};

// class keyword (ECMAScript 2015)
// class declaration (Hoisted)
class fruitclass {
  constructor(taste, color) {
    this.color = color;
    this.taste = taste;
  }
}
// functions-declaration, function expression
let kiwi = new Fruitclass("sour", "green");
// class expression (Not Hoisted)
let Fruitclass2 = class {
  //in the above line we are taking the variable and trying to map with the class name
  constructor(taste, color) {
    this.color = color;
    this.taste = taste;
  }
};

let kiwi2 = new Fruitclass2("sour", "green");
// making changes in the properties and attributes of the DOM by using the document.get function we can change graphics, colour, text, etc.
var canvas = document.getElementById("mycanvas");
console.log(canvas);
