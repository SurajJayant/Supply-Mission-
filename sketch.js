var bullet,wall;
var speed,weight,thickness;
var damage;

var END=3;
var PLAY=2;
var START=1;
var gamestate = 1;

function setup() {
  createCanvas(1600,400);
  speed=round(random(55,90));
  weight=round(random(30,52));
  thickness=round(random(223,321));

  bullet=createSprite(50,200,50,10);
  bullet.shapeColor=color(255,255,255);

  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);
  
}

function draw() {
  background(0,0,0);

  if(gamestate === START){
    bullet.velocityX = 0;
    fill(0,900,900);
    textSize(20);
    textFont("Kohinoor Devanagari");
    text("P R E S S  S P A C E  T O  S T A R T",600,200);
  }

  if(keyDown("space") && gamestate === START){
    gamestate = PLAY;
  }
 if(gamestate === PLAY){
  bullet.velocityX = speed;
  if(bullet.isTouching(wall) && gamestate === PLAY){
    gamestate = END;
  }
 }

 if(gamestate == END){
   if(hascollided(bullet,wall)){
    bullet.velocityX = 0;
    damage=round(0.5*weight*speed*speed/thickness*thickness*thickness);
   }

   if(damage>10){
    wall.shapeColor=color(255,0,0);
   }
   if(damage<10){
    wall.shapeColor=color(0,255,0);
   }
   fill(0,900,900);
   textSize(20);
   textFont("Kohinoor Devanagari");
   text("P R E S S  S P A C E  T O  R E S T A R T",600,200);
 }

 if(keyDown("space") && gamestate === END){
   gamestate = PLAY;
   bullet.x=50;
   bullet.y=200;
   wall.shapeColor=color(100,100,100);
   speed=round(random(55,90));
   weight=round(random(30,52));
   thickness=round(random(223,321)); 
 }
 
  
  fill(0,900,900);
  textSize(20);
  textFont("Kohinoor Devanagari");
  text("D A M A G E : "+damage,200,50);
  text("S P E E D : "+speed,450,50);
  text("W E I G H T : "+weight,600,50);
  text("T H I C K N E S S : "+thickness,800,50);

  


  drawSprites();
}