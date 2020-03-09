// Unified Random or Arbitrary
function getRandomArbitrary(min, max) {
    return Math.random() * 8;
}

// Direction of the movement
// The movement is always positive, because the
// random variable is ranged by 0-100
function getDirection(num){
  // Direction array, it contains the x and y.
  // First initialization by x=0 and y=0
  // Caution : the y system in canvas is little different
  // y + 1 is downwards movement, and y -1 otherwise
    var dirArray ={x:0,y:0};
    if(num<=1){
      // North Direction, x=0 and y=1
      dirArray["x"] = 0; dirArray["y"] = -1; return dirArray;
    }else if (num<=2){
      // Northeast Direction, x=1 and y=1
      dirArray["x"] = 1; dirArray["y"] = -1;
      return dirArray;
    }else if (num<=3){
      // East Direction, x=1 and y=0
      dirArray["x"] = 1; dirArray["y"] = 0;
      return dirArray;
    }else if (num<=4){
      // Southeast Direction, x=-1 and y=-1
      dirArray["x"] = 1; dirArray["y"] = 1;
      return dirArray;
    }else if (num<=5){
      // South Direction, x=0 and y=-1
      dirArray["x"] = 0; dirArray["y"] = 1;
      return dirArray;
    }else if (num<=6){
      // Southwest Direction, x=-1 and y=-1
      dirArray["x"] = -1; dirArray["y"] = 1;
      return dirArray;
    }else if (num<=7){
      // West Direction, x=-1 and y=0
      dirArray["x"] = -1; dirArray["y"] = 0;
      return dirArray;
    }else if (num<=8){
      //Northwest  Direction, x=-1 and y=1
      dirArray["x"] = -1; dirArray["y"] = -1;
      return dirArray;
    }
}


// Canvas Platform.
// Used for drawing the lines

var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');

// Line, the moving object.
function Line(x,y,dx,dy,i) {
  this.x = x; this.y = y; this.i=i; this.dx = dx; this.dy=dy;	
  this.update = function() {
      // Draw first the initial, txhen repeating for later movement
      this.i++;
      if (this.i >52){

      }else{
     	 this.draw();
      // Array declaration of the movement
      var arr = getDirection(getRandomArbitrary(1,100));
      // Move the object by update the position
      this.dx = this.x;
      this.dy = this.y;
      this.x = this.x + (arr["x"]*37);
      this.y = this.y + (arr["y"]*37); 	
      }
      console.log(this.i);
     
  
  };
  this.draw = function() {
    c.beginPath(); c.fillStyle = "#FF0000";
    c.moveTo(this.dx,this.dy);
    c.lineTo(this.x,this.y); c.stroke();
  };
}

var lineobject;
function init(){
    lineobject = new Line(500, 200,500,200,0);
}

function animate(){
    requestAnimationFrame(animate);
    lineobject.update();
}

function mainprogram(){
  init();
  animate();
}
