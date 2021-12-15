// game is somewhat blur due to some images and some changes in font
// so all comments are written of each code
function init() {
  canvas = document.getElementById("mycanvas"); // creating the page as it is a programming interface for the web documents
  W = H = canvas.width = canvas.height = 200;
  pen = canvas.getContext("2d"); // draw a 2D canvas
  // it can be adjusted acc. to the chess row size to make game look more suitable
  cs = 20; // cell size of snake
  game_over = false;
  score = 5;
  // create a image object for food which we will call in the draw image function
  food_img = new Image();
  food_img.src = "apple.png";
  // making the score look more attractive
  trophy = new Image();
  trophy.src = "trophy.png";
  // initial value of score is zero
  score = 0;
  // food call
  food = getRandomFood();
  snake = {
    // min len of init should be two because we have to change the direction as well because we are popping the one cell out and then pushing it into the forward cell
    init_len: 2, // length of the cell array of snake which will be currently running and then it will be increasing

    color: "blue",
    cells: [], // snake has a array called cells
    direction: "right",
    createSnake: function () {
      for (var i = this.init_len; i > 0; i--) {
        this.cells.push({ x: i, y: 0 }); // creating the horizontal snake by making the y coordinate 0
      }
    },
    drawSnake: function () {
      // iterating over each cell of snake to draw it
      for (var i = 0; i < this.cells.length; i++) {
        pen.fillStyle = this.color; // to fill the color type that was mentioned above
        pen.fillRect(
          this.cells[i].x * cs, // we can reduce the speed by dividing the cell size which is getting multiplied to each cell to increase the speed
          this.cells[i].y * cs,
          cs - 2,
          cs - 2
        ); // filling the array of the snake and also passing the cell size also to draw the snake
      }
    },
    updateSnake: function () {
      // we will pop the last cell of the snake array and put it in the front of the snake cell
      //to add movement to the snake
      console.log("updating snake according to the direction property");

      var headX = this.cells[0].x;
      var headY = this.cells[0].y;
      //condition of when snake find the food
      if (headX == food.x && headY == food.y) {
        console.log("Food eaten by snake");
        food = getRandomFood(); // this will give the new coordinate of the food when the previous food get eaten by the snake
        score++; // it will increase the score continously
      } else {
        // as we are moving forward we are popping the previous cell due to length of the snake is constant so now put it in else condition so that if food not get then it will remain unchanged
        this.cells.pop();
      }
      var X, Y;
      if (this.direction == "right") {
        X = headX + 1; // because snake will be moving in the horizontal direction so we will be only increasing the x coordinate y coordinate will remain same
        Y = headY;
      } else if (this.direction == "left") {
        X = headX - 1;
        Y = headY;
      } else if (this.direction == "down") {
        X = headX;
        Y = headY + 1;
      } else {
        X = headX;
        Y = headY - 1;
      }
      // so now we have move the condition this.cells.pop(); in else so below function will add continously if it finds the food
      this.cells.unshift({ x: X, y: Y }); // unshift is used to add in the front
      /*Write a Logic that prevents snake from going out*/
      var last_x = Math.round(W / cs);
      var last_y = Math.round(H / cs);

      if (
        this.cells[0].y < 0 ||
        this.cells[0].x < 0 ||
        this.cells[0].x > last_x ||
        this.cells[0].y > last_y
      ) {
        game_over = true;
      }
    },
  };
  snake.createSnake();
  // Add a Event listener on the Document object
  function keypressed(e) {
    // it will identify the key e using the event listeners
    // console.log("key pressed", e.key); // if we write only e then it will show the whole details to find only key use e.key function
    if (e.key == "ArrowRight") {
      snake.direction = "right";
    } else if (e.key == "ArrowLeft") {
      snake.direction = "left";
    } else if (e.key == "ArrowDown") {
      snake.direction = "down";
    } else {
      snake.direction = "up";
    }
    console.log(snake.direction);
  }
  document.addEventListener("keydown", keypressed);
}
function draw() {
  //erase the old frame
  pen.clearRect(0, 0, W, H);
  snake.drawSnake();
  pen.fillStyle = this.color; // fillStyle is used to change the present colour
  // pen.fillRect(food.x * cs, food.y * cs, cs, cs); // we need to draw the food so that it can be shown in the
  // if we not multiply by cs in above which scales the each cell then food will will always be in the corner so multiply by cs to have random position of the food
  // the fill rect is to form a rectangle in canvas now if we want to draw a image in canvas then
  pen.drawImage(food_img, food.x * cs, food.y * cs, cs, cs);
  // now adding some functions to show the score on the  main screen
  pen.drawImage(trophy, 10, 10, cs, cs);
  pen.fillStyle = "black";
  pen.font = "10px Arial";
  pen.fillText(score, 18, 20); // these are coordinates and we are overlapping the coordinates of the score with the trophy
}
function update() {
  snake.updateSnake();
}
// adding the random food
function getRandomFood() {
  // The Math.random() function returns a floating-point, pseudo-random number in the range 0 to less than 1 (inclusive of 0, but not 1) with approximately uniform distribution over that range — which you can then scale to your desired range
  var foodX = Math.round((Math.random() * (W - cs)) / cs);
  var foodY = Math.round((Math.random() * (H - cs)) / cs);
  var food = {
    x: foodX,
    y: foodY,
    color: "red",
  };
  return food;
}
function gameloop() {
  if (game_over == true) {
    clearInterval(g); // this will stop the infinite loop which is running in the variable f using the setInterval which is repeating after every 100milliseconds
    alert("Game Over");
    return;
  }
  draw();
  update();
}
init();
var f = setInterval(gameloop, 100);
