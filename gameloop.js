// init stands for initial screen where we initialize different objects
// to get displayed on the screen
function init() {
  //   console.log("in init loop");
  canvas = document.getElementById("mycanvas");
  W = canvas.width = 500;
  H = canvas.height = 500;
  pen = canvas.getContext("2d");
  game_over = false;
  rect = {
    x: 20,
    y: 20,
    w: 40,
    h: 40,
    speed: 10,
  };
}
// draw various objects on the screen
function draw() {
  // console.log("we are in draw loop");
  pen.clearRect(0, 0, W, H); // this will clear the previous rectangle as x coordinate is moving forward
  pen.fillRect(rect.x, rect.y, rect.w, rect.h);
  pen.fillStyle = "red";
}
function update() {
  //   console.log("we are in update loop");
  rect.x += rect.speed;
  if (rect.x > W - rect.w || rect.x < 0) {
    // rect.x<0 is letborder condition and w-rect.w is rightborder condition
    rect.speed *= -1; // change the direction by making it negative so it will come back
  }
}
function gameloop() {
  //   console.log("we are in gameloop");
  if (game_over == true) {
    clearInterval(f); // function if we want to stop the infinite loop then we uses clearinterval to stop running the infinite running loop
  }
  draw();
  update();
}
init();
// setInterval is a function if we want to call a function again and again after every t milliseconds so the function name is setInterval(gameloop,t)
var f = setInterval(gameloop, 100);
