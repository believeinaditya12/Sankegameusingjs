// this file is link to the html5canvas.html to made
// modifying the properties of the canvas object in the javascript
// manipulating object using DOM in javascript
canvas = document.getElementById("mycanvas");
canvas.width = 500;
canvas.height = 500;

// canvas is used to draw graphics
pen = canvas.getContext("2d");
// using the above line we can draw on the canvas using the following commands
//we can also use below commands in the console to create the rectangle
// it will change the colour from black to blue
pen.fillStyle = "blue";
pen.fillRect(20, 20, 50, 50);
//  it will fill the black colour rectangle in the green colour
pen.arc(60, 60, 50, 50, 2 * MATH.PI);
//   and then
pen.stroke();
// will create a circle
