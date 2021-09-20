var score =0;
var gun,bluebubble,redbubble, bullet, backBoard;
var gunImg,bubbleImg, bulletImg, blastImg, backBoardImg;
var redBubbleGroup, redBubbleGroup, bulletGroup;

var life =3;
var score=0;
var gameState=1

function preload(){
  gunImg = loadImage("gun1.png")
  blastImg = loadImage("blast.png")
  bulletImg = loadImage("bullet1.png")
  blueBubbleImg = loadImage("waterBubble.png")
  redBubbleImg = loadImage("redbubble.png")
  backBoardImg= loadImage("back.jpg")
}
function setup() {
  createCanvas(800, 800);

  backBoard= createSprite(50, width/2, 100,height);
  backBoard.addImage(backBoardImg)
  
  gun= createSprite(100, height/2, 50,50);
  gun.addImage(gunImg)
  gun.scale=0.2
  

  
  
  bulletGroup = createGroup();   
  blueBubbleGroup = createGroup();   
  redBubbleGroup = createGroup();   
 
  
  
}

function draw() {
  background("#BDA297");

  //display Score and number of lifes



  if(gameState===1){
    gun.y=mouseY  
    if(keyDown("space")){
      shootBullets();
      }
      if(frameCount%100===0){
        drawRedBubble();
        
      }
      f(frameCount%80===0)
      {
        drawBlueBubble();
        
      }
  }
    drawSprites();
  
  
     
}
function shootBullets() 
{
  bullet.createSprite(150,width/2,50,20);
  bullet.y=gun.y-20;
  bullet.addImage(bulletImg);
  bullet.scale=0.12;
  bullet.velocityX=7;
  bullet.LifeTime=400;
  bulletGroup.add(bullet);



} 
function drawBlueBubble(){
  bluebubble.createSprite(800,random(20,780),40,40);
  bluebubble.addImage(blueBubbleImg);
  bluebubble.scale=0.1;
  bluebubble.velocityX=-8;
  bluebubble.lifeTime=400;
  blueBubbleGroup.add(bluebubble);
  
}
function drawRedBubble(){
  redbubble.createSprite(800,random(20,780),40,40);
  redbubble.addImage(redBubbleImg);
  redbubble.scale=0.1;
  redbubble.velocityX=-8;
  redbubble.lifeTime=400;
  redBubbleGroup.add(redbubble);
  
}
function handleBubbleColision(bubbleGroup){
  if (life>0){
    score=score+1;

  }
}

