function preload(){
  backGround = loadImage("./images/background.jpg")
  bomb = loadImage("./images/bomb.jpg")
  bullet = loadImage("./images/bullet.jpg")
  explosion = loadImage("./images/download.jpg")
  hero = loadImage("./images/hero.jpg")
  m1 = loadImage("./images/monster1.jpg")
  m2 = loadImage("./images/monster2.jpg")
}


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(backGround);  
  drawSprites();
}