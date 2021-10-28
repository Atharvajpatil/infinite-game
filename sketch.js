var PLAY = 1
var END = 0 
var background1,backgroundimg;
var boy,boyimg;
var coins,coinsimg;
var obstacle,obstaclesimg,obstacleGroup;
var coinsGroup
var gamestate = PLAY
var restartimage,gameOverimg
var invGround;
var score;
var HighScore; 
var MaxHighScore;

function preload(){
  backgroundimg=loadImage("backround.png");
boyimg=loadAnimation("boyrun1.PNG","boyrun2.PNG","boyrun3.PNG");
obstaclesimg = loadImage("obstacle.png")
gameOverimg = loadImage("gameOver.png")
restartimage = loadImage("restart.png")
gameOverimg = loadImage("gameOver.png")
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 background1 = createSprite(0,0);
 background1.addImage(backgroundimg)
 background1.scale = 2.8
 
 boy = createSprite(50,110,15,8)
 boy.addAnimation("boy",boyimg)
 boy.scale = 0.1

 gameOver = createSprite(300,100);
 gameOver.addImage(gameOverimg);
 gameOver.scale = 0.5;

 restart = createSprite(300,140);
 restart.addImage(restartimage);
  restart.scale = 0.5;

  invGround = createSprite(100,135,200,10);
  invGround.visible =false;

  boy.setCollider("rectangle",0,0,boy.width,boy.height);
  boy.debug = false

  score = 0

  obstacleGroup = createGroup();
}

function draw(){
  background(180)
  text("Score: "+ score, 500,50);
  text("HighScore: "+ HighScore, 400,50);
  
  console.log(boy.y);

if(gamestate === PLAY){
  gameOver.visible = false;
  restart.visible = false;

  score = score + Math.round(getFrameRate()/60);

  if(background1.x  < 0){
    background1.x = background1.width/2
    }

  if(keyDown("space")&& boy.y > 107) {
    boy.velocityY = -10;
}
boy.velocityY = boy.velocityY + 0.8

spawnObstacles();

if(obstacleGroup.isTouching(boy)){
  gamestate = END
}

 else if(gamestate === END){
  gameOver.visible = true;
  restart.visible = true;
 
  background1.velocityX = 0;
      boy.velocityY = 0

      obstaclesGroup.setLifetimeEach(-1);

      obstaclesGroup.setVelocityXEach(0);
}
}
boy.collide(invGround);





  background1.velocityX = -3

  drawSprites();
spawnObstacles();


}

function spawnObstacles(){
  if (frameCount % 100 === 0){
    var obstacle = createSprite(350,112,20,50);
    
    obstacle.addImage("obstacle",obstaclesimg)
    obstacle.scale = 0.2-0.01
    obstacle.velocityX = -3 
  }
}

  

