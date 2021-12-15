// Event listeners- using eventlisteners in javascript we can add controls to our game
// creating a document using the canvas
canvas = document.getElementById("mycanvas");
function f() {
  console.log("You clicked on the canvas");
}
// adding the event listener to the canvas
canvas.addEventListener("click", f);
function f2(e) {
  // e represents the key which is getting pressed
  console.log("A key got pressed", e.key);
}
document.addEventListener("keydown", f2); // so whenever we press any key then f2 function will get called
