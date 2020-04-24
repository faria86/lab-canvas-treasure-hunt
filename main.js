// Iteration 1
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
// the canvas logic should be done once somewhere else 
var w = 500;
var h = 500;
// grid step
var square = 50; 
var canvasElement = 'canvas';

canvas.width  = w;
canvas.height = h;

var drawGrid = function(context, w, h, square) {
  //rows  
  context.beginPath(); 
    for (var x = 0;x <= w; x += square) {
            context.moveTo(x, 0);
            context.lineTo(x, h);
    }
    // set style and draw
    context.strokeStyle = 'black';
    context.lineWidth = 1;
    context.stroke(); 
    // columns
    context.beginPath(); 
    for (var y = 0; y <= h; y += square) {
            context.moveTo(0, y);
            context.lineTo(w, y);
    }
    // set style and draw
    context.strokeStyle = 'black';
    context.lineWidth = 1;
    context.stroke(); 
};
drawGrid(context, w, h, square);

// Iteration 2
// You have to create a class Character
class Character {
  constructor(row, col, canvas, context) {
    this.row = row;
    this.column = col; 
    this.canvas = canvas;
    this.context = context
  }

  draw() {
    const playerImage = new Image(); 

    const height = this.canvas.height;
    const width = this.canvas.width;

    player.Image.src = "./images/character-down.png";

    this.player.Image.addEventListener("load",() => {
      this.context.drawImage(this.playerImage, 0, 0, width / 10, height / 10)
    });
  }

  moveUp() {
    this.row-=1
  }

  moveDown() {
    this.row+=1
  }

  moveLeft() {
    this.col-=1
  }

  moveRight() {
    this.col+=1
  }

  const player = new Character(0, 0);
  window.addEventListener('keydown', (event) => {
    // Stop the default behavior (moving the screen to the left/up/right/down)
    event.preventDefault();
  
    // React based on the key pressed
    switch (event.keyCode) {
      case 37:
        Character.keyCode.moveLeft();
        //console.log('left');
        break;
      case 38:
        Character.keyCode.moveUp();
        //console.log('up');
        break;
      case 39:
        Character.keyCode.moveRight();
        //console.log('right');
        break;
      case 40:
        Character.keycode.moveDown();
        console.log('down');
        break;
    }
  });
}

class Treasure {
  setRandomPosition() {
    this.row = Math.floor(Math.random() * 10);
    this.col = Math.floor(Math.random() * 10);
  }

  draw() {
    const treasureImage = new Image(); 

    const height = this.canvas.height;
    const width = this.canvas.width;

    player.Image.src = "./images/treasure.png";

    this.player.Image.addEventListener("load",() => {
      this.context.drawImage(this.playerImage, 0, 0, width / 10, height / 10)
    });
  }
}


function drawEverything() {
  //drawPlayer()
  // drawTreasure()
}

drawEverything();