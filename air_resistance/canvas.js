var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');
c.fillStyle = "black";
c.fillRect(0, 0, canvas.width, canvas.height);

var radius = 0.0 ;
var gravity = 9.8;
var mass = 20.0;
var weight = gravity * mass;
var cd = 0.47;
var rho = 0.0;
var area = 0.0  ;
var drag = 0.0;
var acceleration = 0.0;
var velocity = 1.0;
var timewith = 0;
var timewithout = 0;
function Ball(x,  y,dy, radius, color) {
  this.x = x;
  this.y = y;
  this.dy = dy;
  this.radius = radius;
  this.color = color;
  this.update = function() {
    timewith++;
    console.log("timewith: "+ timewith);
    console.log("heightwith:"+this.y);
    console.log("with : "+velocity);
    if (this.y + this.radius >= canvas.height){
      this.draw();
    }else{
      velocity += acceleration;
      dy += velocity;

      this.draw();
      this.y = dy;
    }



  };
  this.draw = function() {
    c.beginPath();
    c.fillStyle = this.color;
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fill();
    c.closePath();
  };
}

function BallWithout(x, y,dy, radius, color) {
    this.x = x;
    this.y = y;
    this.dy = dy;
    this.radius = radius;
    this.color = color;
    this.update = function() {
      timewithout++;
      console.log("timewithout: "+timewithout);
      console.log("without: "+velocity);
      console.log("heightwithout:"+this.y);
      if (this.y + this.radius >= canvas.height){
        this.draw();

      }else {
        velocity += gravity;
        dy += velocity ;
        this.draw();
        this.y = dy;
      }


    };
    this.draw = function() {
        c.beginPath();
        c.fillStyle = this.color;
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fill();
        c.closePath();

    };
}

var ball;
var ball1;
function init(){
    ball = new Ball(1050, 155, 10,radius,'	#00FFFF');
    ball1 = new BallWithout(600,155,10,radius,'#FF1493');
    console.log(ball);
}

function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0,canvas.width,canvas.height);
    c.fillStyle = "black";
    c.fillRect(0, 0, canvas.width, canvas.height);

    ball.update();
    ball1.update();
    c.font = 'bold 50px Helvetica';
    c.fillStyle = "#00FFFF";
    c.fillText("Ball Without",470,50);
    c.fillText("Air Resistance",440,80);
    c.fillStyle = "#FF1493";
    c.fillText("Ball With",940,50);
    c.fillText("Air Resistance",890,80);
}


function mainprogram(){
  radius = parseInt(document.getElementById('radinput').value);
  console.log(radius);
  rho = 1.4;
  area = (4 * Math.PI * (radius*radius*0.0002645833*0.0002645833))  ;
  console.log(area);
  drag = (cd * rho * (velocity*velocity)*area)/2;
  acceleration = ((weight-drag)/mass);
  init();
  animate();
    volume = 0.0;
    rho = 0.0;
    area = 0.0  ;
    drag = 0.0;
    acceleration = 0.0;
}
