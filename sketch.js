var backgroundImage
var girlImage
var snowImage
function preload(){

  girlImage=loadImage("girl.png")
  backgroundImage=loadImage("snow1.jpg")
  snowImage=loadImage("snow4.webp")
  
}

function setup() {
  createCanvas(800,400);
 girl=createSprite(400, 200, 50, 50);
girl.addImage(girlImage) 

girl.scale=0.5
}


  

function draw() {
  background(backgroundImage);  
  snowfall ();
  drawSprites();

}


function snowfall(){
  if(frameCount % 80 === 0){
     snow=createSprite(Math.round(random(10,790)),2,70,80)
    snow.addImage(snowImage)
    snow.scale=0.2
     snow.velocityY=12

  }
}